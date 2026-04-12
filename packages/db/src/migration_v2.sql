-- MIGRATION: v1.0.0 -> v2.0.0 (Enterprise P-SEO Refactor)
-- Goal: Align with docs/DATABASE-SCHEMA.md

-- 1. สร้างตาราง provinces หลัก
create table if not exists provinces (
  id serial primary key,
  slug varchar(50) unique not null,
  name_th varchar(100) not null,
  name_en varchar(100) not null,
  region varchar(20) not null check (region in ('North', 'Northeast', 'Central', 'East', 'South', 'West')),
  priority int default 50,
  tier int default 2 check (tier in (1, 2)),
  is_active boolean default true,
  coordinates point,
  created_at timestamp with time zone default now()
);

-- 2. ปรับปรุง provinces_content ให้เชื่อมโยงกับ ID
-- (ขั้นตอนนี้ต้องระวังหากมีข้อมูลเดิมอยู่ ให้ทำการย้ายข้อมูลก่อนลบตารางเก่า)
-- หมายเหตุ: เพื่อความปลอดภัย ผมจะสร้างตารางใหม่และแนะนำให้คุณรันคำสั่งย้ายข้อมูลใน Supabase
alter table provinces_content add column if not exists province_id int references provinces(id) on delete cascade;
alter table provinces_content add column if not exists seo_title text;
alter table provinces_content add column if not exists seo_description text;
alter table provinces_content add column if not exists keywords text[];

-- 3. ปรับปรุง leads ให้รองรับฟิลด์ใหม่
alter table leads add column if not exists full_name varchar(255);
alter table leads add column if not exists phone varchar(50);
alter table leads add column if not exists email varchar(255);
alter table leads add column if not exists province_id int references provinces(id);

-- 4. สร้างตาราง verifications (Institutional Ledger)
create table if not exists verifications (
  id uuid primary key default gen_random_uuid(),
  site_id varchar(100) unique not null,
  province_id int references provinces(id),
  verification_type varchar(50) default 'standard',
  issued_at timestamp with time zone default now(),
  expires_at timestamp with time zone,
  status varchar(20) default 'active' check (status in ('active', 'revoked', 'pending')),
  ledger_signature text not null,
  metadata jsonb default '{}'::jsonb
);

-- 5. สร้างตาราง projects & project_locations (Many-to-Many)
create table if not exists project_locations (
  project_id uuid references projects(id) on delete cascade,
  province_id int references provinces(id) on delete cascade,
  primary key (project_id, province_id)
);

-- 6. INDICES
create index if not exists idx_provinces_slug on provinces(slug);
create index if not exists idx_provinces_priority_tier on provinces(priority desc, tier asc);
create index if not exists idx_verifications_site_id on verifications(site_id);

-- 7. RLS ENABLEMENT
alter table provinces enable row level security;
alter table verifications enable row level security;
alter table project_locations enable row level security;

create policy "Allow public read" on provinces for select using (true);
create policy "Allow public read" on verifications for select using (true);
