import type { WifiConfig } from './types';

/**
 * Escapes special characters (\ ; : " ,) in the SSID or password
 * to prevent parsing errors on mobile devices.
 */
const escapeString = (str: string): string => {
  if (!str) return "";
  return str.replace(/([\\;,:"])/g, '\\$1');
};

/**
 * Generates a ZXing-compliant Wi-Fi connection string.
 * Format: WIFI:S:<SSID>;T:<Type>;P:<Password>;H:<Hidden>;;
 */
export const buildWifiString = (cfg: WifiConfig): string => {
  const safeSsid = escapeString(cfg.ssid);
  const safePass = cfg.password ? escapeString(cfg.password) : "";
  return `WIFI:S:${safeSsid};T:${cfg.encryption};P:${safePass};H:${cfg.isHidden};;`;
};
