/**
 * 🛡️ UNLINK-REGISTRY: RATE LIMITING UTILITY
 * Standard control for API request frequency.
 */

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export function isRateLimited(
  ip: string,
  limit: number = 60,
  windowMs: number = 60000,
): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  // Reset if window has passed
  if (now - entry.lastReset > windowMs) {
    entry.count = 0;
    entry.lastReset = now;
  }

  entry.count++;
  rateLimitMap.set(ip, entry);

  return entry.count > limit;
}
