-- AEMDEVWEB & UNLINK-TH MASTER SCHEMA v1.0.0
-- Strategy: Enterprise Integrity & P-SEO Alignment

-- 1. EXTENSIONS
create extension if not exists "uuid-ossp";

-- 2. PROJECTS TABLE (Portfolio)
create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  description text,
  thumbnail_url text,
  category text not null, -- e.g., 'E-commerce', 'SaaS', 'Infrastructure'
  tags text[],
  client_name text,
  live_url text,
  metadata jsonb default '{}'::jsonb, -- Store dynamic SEO parameters
  is_featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. LEADS TABLE (Inquiry Management)
create table if not exists leads (
  id uuid primary key default uuid_generate_v4(),
  site_origin text not null, -- e.g., 'web:province:bangkok', 'me:contact'
  name text not null,
  contact text not null, -- Phone or Line ID
  message text,
  status text default 'new', -- 'new', 'contacted', 'completed', 'archived'
  metadata jsonb default '{}'::jsonb, -- Store browser info, province slug, etc.
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. POSTS TABLE (Content Engine)
create table if not exists posts (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text,
  thumbnail_url text,
  category text,
  author_id uuid,
  is_published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. UNLINK VERIFICATION (Trust Ledger)
create table if not exists unlink_verification (
  id uuid primary key default uuid_generate_v4(),
  site_id text unique not null, -- e.g., 'AEM-WEB-001'
  site_name text not null,
  verification_tier text default 'Standard', -- 'Standard', 'Premium', 'Architect Verified'
  architect_signature text,
  core_web_vitals_status jsonb default '{}'::jsonb,
  security_headers_status jsonb default '{}'::jsonb,
  transparency_timeline jsonb default '[]'::jsonb,
  last_audit_date timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. PROVINCES CONTENT (P-SEO Overrides)
-- Used when DB content needs to override static @repo/core data
create table if not exists provinces_content (
  id uuid primary key default uuid_generate_v4(),
  province_slug text unique not null,
  title text,
  content text,
  metadata jsonb default '{}'::jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. RLS POLICIES (Row Level Security)
-- Enable RLS
alter table projects enable row level security;
alter table leads enable row level security;
alter table posts enable row level security;
alter table unlink_verification enable row level security;
alter table provinces_content enable row level security;

-- Public read access for projects, posts, verification, and province content
create policy "Allow public read access" on projects for select using (true);
create policy "Allow public read access" on posts for select using (is_published = true);
create policy "Allow public read access" on unlink_verification for select using (true);
create policy "Allow public read access" on provinces_content for select using (true);

-- Leads can be inserted by anyone (public submission)
create policy "Allow public lead insertion" on leads for insert with check (true);

-- Admin access (Manual config required in Supabase Dashboard for specific roles)
