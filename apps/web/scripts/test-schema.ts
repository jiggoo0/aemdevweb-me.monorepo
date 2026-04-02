/**
 * [TEST SCRIPT]: E-E-A-T IDENTITY & SCHEMA VALIDATION v1.0.0
 * [STRATEGY]: Automated Verification of Identity Hub & GEO-Authority
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "../constants/site-config";
import { AREA_NODES } from "@repo/core";
import { generatePersonSchema, generateOrganizationSchema, generateLocalBusinessSchema } from "../lib/schema";
import type { Person, Organization, ProfessionalService } from "schema-dts";

const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function logHeader(title: string) {
  console.log(`\n${COLORS.bright}${COLORS.cyan}=== ${title} ===${COLORS.reset}`);
}

function logSuccess(message: string) {
  console.log(`${COLORS.green}✓ PASS: ${message}${COLORS.reset}`);
}

function logError(message: string) {
  console.log(`${COLORS.red}✗ FAIL: ${message}${COLORS.reset}`);
}

function logWarning(message: string) {
  console.log(`${COLORS.yellow}⚠ WARN: ${message}${COLORS.reset}`);
}

let totalTests = 0;
let failedTests = 0;

function assert(condition: boolean, message: string) {
  totalTests++;
  if (condition) {
    logSuccess(message);
  } else {
    failedTests++;
    logError(message);
  }
}

// =========================================
// [01] PERSON SCHEMA VALIDATION
// =========================================
function validatePersonSchema() {
  logHeader("Person Schema Validation (E-E-A-T Expert)");
  const person = generatePersonSchema() as Person;

  assert(person.name === SITE_CONFIG.expert.legalNameThai, `Name matches legalNameThai: ${person.name}`);
  assert(person.jobTitle === SITE_CONFIG.expert.jobTitle, `JobTitle matches: ${person.jobTitle}`);
  
  const sameAs = person.sameAs as string[];
  assert(Array.isArray(sameAs) && sameAs.length > 0, "sameAs links are present");
  assert(sameAs.includes(SITE_CONFIG.expert.sameAs[0]), `Includes primary identity link: ${SITE_CONFIG.expert.sameAs[0]}`);
  
  // Check for "me.aemdevweb.com"
  const hasMeLink = sameAs.some(link => link.includes("me.aemdevweb.com"));
  assert(hasMeLink, "Includes 'me.aemdevweb.com' for identity verification");
}

// =========================================
// [02] ORGANIZATION SCHEMA VALIDATION
// =========================================
function validateOrganizationSchema() {
  logHeader("Organization Schema Validation");
  const org = generateOrganizationSchema() as Organization;

  assert(org.name === SITE_CONFIG.brandName, `Name matches brandName: ${org.name}`);
  assert(org.url === SITE_CONFIG.siteUrl, `URL matches siteUrl: ${org.url}`);
  
  const sameAs = org.sameAs as string[];
  assert(Array.isArray(sameAs) && sameAs.length > 0, "sameAs links are present");
}

// =========================================
// [03] GEO-AUTHORITY VALIDATION (77 PROVINCES)
// =========================================
function validateGeoAuthority() {
  logHeader("GEO-Authority Validation (77 Provinces)");
  
  assert(AREA_NODES.length === 77, `Total provinces count is 77 (Current: ${AREA_NODES.length})`);

  let allValid = true;
  AREA_NODES.forEach(node => {
    const schema = generateLocalBusinessSchema(node) as ProfessionalService;
    
    // Check if province name is in the schema address or name
    const hasProvinceInName = schema.name?.toString().includes(node.province) || schema.name?.toString().includes(node.title);
    const hasProvinceInAddress = (schema.address as any).addressLocality === node.province;
    
    if (!hasProvinceInName && !hasProvinceInAddress) {
      logError(`Province mismatch for ${node.slug}: Expected ${node.province}`);
      allValid = false;
    }
    
    if (!schema.parentOrganization) {
      logError(`Missing parentOrganization for ${node.slug}`);
      allValid = false;
    }
  });

  if (allValid) {
    logSuccess("All 77 provinces have valid LocalBusiness Schema structure");
  } else {
    failedTests++;
  }
}

// =========================================
// [04] DATA CONSISTENCY (UI vs CONFIG)
// =========================================
function validateDataConsistency() {
  logHeader("Data Consistency Validation");

  // Check "นายเอ็มซ่ามากส์" (9mza) and "อลงกรณ์ ยมเกิด"
  assert(SITE_CONFIG.expert.displayName.includes("นายเอ็มซ่ามากส์"), "displayName includes 'นายเอ็มซ่ามากส์'");
  assert(SITE_CONFIG.expert.displayName.includes("9mza"), "displayName includes '9mza'");
  assert(SITE_CONFIG.expert.legalNameThai === "อลงกรณ์ ยมเกิด", "legalNameThai is 'อลงกรณ์ ยมเกิด'");

  // Check if SITE_CONFIG.expert.sameAs contains valid URLs
  SITE_CONFIG.expert.sameAs.forEach(link => {
    assert(link.startsWith("http"), `Link is valid URL: ${link}`);
  });
}

// =========================================
// [05] EXECUTION
// =========================================
async function run() {
  console.log(`${COLORS.bright}${COLORS.yellow}Starting E-E-A-T Validation...${COLORS.reset}`);
  
  validatePersonSchema();
  validateOrganizationSchema();
  validateGeoAuthority();
  validateDataConsistency();

  console.log(`\n${COLORS.bright}${COLORS.cyan}=== Validation Summary ===${COLORS.reset}`);
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${totalTests - failedTests}`);
  console.log(`Failed: ${failedTests}`);

  if (failedTests === 0) {
    console.log(`\n${COLORS.bright}${COLORS.green}ALL VALIDATIONS PASSED! 100% READY FOR PRODUCTION.${COLORS.reset}\n`);
    process.exit(0);
  } else {
    console.log(`\n${COLORS.bright}${COLORS.red}VALIDATION FAILED with ${failedTests} errors.${COLORS.reset}\n`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
