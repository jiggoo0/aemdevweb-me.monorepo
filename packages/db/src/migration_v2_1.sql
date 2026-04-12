-- MIGRATION: v2.1.0 (Fixing provinces_content schema)
-- Goal: Ensure all required columns exist for the new seeder

-- 1. Ensure provinces table is complete
-- (Already created in v2.0.0, but just in case)

-- 2. Augment provinces_content with missing SEO columns
alter table provinces_content add column if not exists long_description text;
alter table provinces_content add column if not exists seo_title text;
alter table provinces_content add column if not exists seo_description text;
alter table provinces_content add column if not exists keywords text[];

-- 3. Fix potential NOT NULL constraint issues for migration
alter table provinces_content alter column title drop not null;
alter table provinces_content alter column content drop not null;

-- 4. Re-verify indices
create index if not exists idx_provinces_content_province_id on provinces_content(province_id);
