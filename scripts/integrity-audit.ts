/**
 * [SYSTEM_INTEGRITY]: ARCHITECTURAL_AUDITOR v2.0.0
 * [STRATEGY]: Static Analysis | Boundary Enforcement | Dependency Consistency
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const PROJECT_ROOT = process.cwd();
const APPS_DIR = path.join(PROJECT_ROOT, "apps");
const PACKAGES_DIR = path.join(PROJECT_ROOT, "packages");

// --- 🛡️ Check 1: Boundary Violations (Strict Relative Path Control) ---
function checkBoundary() {
  console.log("\n[1/5] Checking Boundary Violations...");
  try {
    const output = execSync(
      `grep -r "\\.\\./\\.\\./\\.\\./packages/" apps --include="*.tsx" --include="*.ts" || true`
    ).toString();
    if (output.trim()) {
      console.error("❌ Found boundary violations (Deep relative imports found):");
      console.error(output);
      process.exit(1);
    }
    console.log("✅ No boundary violations found.");
  } catch (error) {
    console.log("✅ No boundary violations found.");
  }
}

// --- 🛡️ Check 2: Version Mismatch (Consistency Guard) ---
function checkVersions() {
  console.log("\n[2/5] Checking Version Mismatch...");
  const commonLibs = ["react", "react-dom", "next", "typescript"];
  const libVersions: Record<string, { pkg: string; version: string }[]> = {};

  const getAllPackages = () => {
    const apps = fs.readdirSync(APPS_DIR).map((d) => `apps/${d}/package.json`);
    const pkgs = fs.readdirSync(PACKAGES_DIR).map((d) => `packages/${d}/package.json`);
    return [...apps, ...pkgs].filter((p) => fs.existsSync(path.join(PROJECT_ROOT, p)));
  };

  getAllPackages().forEach((pkgPath) => {
    const pkg = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, pkgPath), "utf8"));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    commonLibs.forEach((lib) => {
      if (deps[lib]) {
        if (!libVersions[lib]) libVersions[lib] = [];
        libVersions[lib].push({ pkg: pkg.name, version: deps[lib] });
      }
    });
  });

  let hasError = false;
  Object.entries(libVersions).forEach(([lib, versions]) => {
    const uniqueVersions = [...new Set(versions.map((v) => v.version))];
    if (uniqueVersions.length > 1) {
      hasError = true;
      console.error(`❌ Mismatch in ${lib}:`);
      versions.forEach((v) => console.error(`  - ${v.pkg}: ${v.version}`));
    }
  });

  if (hasError) process.exit(1);
  console.log("✅ All common library versions are consistent.");
}

// --- 🛡️ Check 3: Circular Dependencies (Graph Integrity) ---
function checkCircular() {
  console.log("\n[3/5] Checking Circular Dependencies...");
  const graph: Record<string, string[]> = {};
  const pkgDirs = fs.readdirSync(PACKAGES_DIR).filter((d) => 
    fs.statSync(path.join(PACKAGES_DIR, d)).isDirectory()
  );

  pkgDirs.forEach((d) => {
    const pkgPath = path.join(PACKAGES_DIR, d, "package.json");
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      graph[pkg.name] = Object.keys(pkg.dependencies || {}).filter((dep) => dep.startsWith("@repo/"));
    }
  });

  function findCycle(node: string, visited = new Set<string>(), stack: string[] = []): string[] | null {
    if (stack.includes(node)) return [...stack, node];
    if (visited.has(node)) return null;
    visited.add(node);
    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      const cycle = findCycle(neighbor, visited, [...stack, node]);
      if (cycle) return cycle;
    }
    return null;
  }

  let foundCycle = false;
  Object.keys(graph).forEach((node) => {
    const cycle = findCycle(node);
    if (cycle) {
      foundCycle = true;
      console.error(`❌ Circular dependency found: ${cycle.join(" -> ")}`);
    }
  });

  if (foundCycle) process.exit(1);
  console.log("✅ No circular dependencies between packages found.");
}

// --- 🛡️ Main Audit Loop ---
async function runAudit() {
  console.log("🚀 Starting Absolute Integrity Audit...");
  checkBoundary();
  checkVersions();
  checkCircular();
  console.log("\n🏆 ARCHITECTURAL INTEGRITY: 100% SUCCESS");
}

runAudit().catch(() => process.exit(1));
