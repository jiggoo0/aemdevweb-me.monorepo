-- [DATABASE SCHEMA]: AEMDEVWEB-V18 (TURSO/libSQL)
-- [STRATEGY]: Optimized for Regional SEO, GEO Tracking, and Business Automation

-- 1. Table: Provinces (77 จังหวัดสำหรับการทำ Local SEO)
CREATE TABLE IF NOT EXISTS provinces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name_th TEXT NOT NULL,
    name_en TEXT NOT NULL,
    region TEXT NOT NULL,
    priority INTEGER DEFAULT 0,
    seo_title TEXT,
    seo_description TEXT,
    geo_coordinates TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table: Services (บริการหลัก)
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    price_start REAL,
    category TEXT,
    is_featured BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table: System Metrics (สถิติเรียลไทม์เพื่อ E-E-A-T)
CREATE TABLE IF NOT EXISTS system_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metric_key TEXT NOT NULL UNIQUE,
    metric_value REAL NOT NULL,
    unit TEXT,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Table: Lead Management (ระบบจัดการลูกค้า)
CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_name TEXT NOT NULL,
    business_type TEXT,
    phone_number TEXT,
    intent_level TEXT DEFAULT 'cold', -- cold, warm, hot
    source TEXT, -- เช่น Organic, AI_Search, Referral
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. Table: GEO Analytics (ระบบตรวจจับ AI Search)
CREATE TABLE IF NOT EXISTS geo_analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    query_intent TEXT NOT NULL,
    ai_engine TEXT NOT NULL, -- เช่น ChatGPT, Gemini, Perplexity
    matched_service_slug TEXT,
    hit_count INTEGER DEFAULT 1,
    last_detected DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- [INDEXING]: เพิ่มดัชนีเพื่อความเร็วในการค้นหาระดับ Edge (Zero-Latency)
CREATE INDEX IF NOT EXISTS idx_provinces_slug ON provinces(slug);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_leads_intent ON leads(intent_level);
