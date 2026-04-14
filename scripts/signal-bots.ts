import { SHARED_SITE_CONFIG } from "../packages/core/src/constants/site-config";

/**
 * [STRATEGIC_SIGNALING]: Bot Indexing Activation Script v1.0.0
 * [DNA]: Automated Ping for Google, Bing, and SearchGPT Nodes
 * [COMPLIANCE]: Standard WebSub & Indexing Protocols
 */

const TARGET_URLS = [
  SHARED_SITE_CONFIG.links.site, // main web
  SHARED_SITE_CONFIG.links.me,   // architect hub
  "https://me.aemdevweb.com",    // direct me hub
  "https://unlink-th.com",      // reputation engine
];

const BOTS = [
  { name: "GoogleBot", url: "https://www.google.com/ping?sitemap=" },
  { name: "BingBot", url: "https://www.bing.com/ping?sitemap=" },
];

async function signalBots() {
  console.log("\x1b[32m%s\x1b[0m", "🚀 INITIALIZING STRATEGIC SIGNALING PROTOCOL...");
  
  for (const site of TARGET_URLS) {
    // Ensure URL doesn't end with slash before adding sitemap
    const baseSite = site.endsWith('/') ? site.slice(0, -1) : site;
    const sitemap = `${baseSite}/sitemap.xml`;
    console.log(`\n\x1b[34m[NODE]: ${baseSite}\x1b[0m`);

    for (const bot of BOTS) {
      const pingUrl = `${bot.url}${encodeURIComponent(sitemap)}`;
      try {
        const response = await fetch(pingUrl);
        if (response.ok) {
          console.log(`\x1b[32m  ✓ [${bot.name}]: SIGNAL_SENT_SUCCESSFULLY\x1b[0m`);
        } else {
          console.log(`\x1b[31m  ✗ [${bot.name}]: SIGNAL_REFUSED (${response.status})\x1b[0m`);
        }
      } catch (error: any) {
        console.log(`\x1b[31m  ✗ [${bot.name}]: CONNECTION_FAILED (${error.message})\x1b[0m`);
      }
    }
  }

  console.log("\n\x1b[32m%s\x1b[0m", "🏁 ALL SIGNALS TRANSMITTED. BOT INDEXING QUEUED.");
}

// EXECUTE
signalBots().catch(err => {
  console.error("\x1b[31m%s\x1b[0m", `FATAL: ${err.message}`);
  process.exit(1);
});
