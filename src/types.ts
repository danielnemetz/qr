export type WifiEncryption = 'WPA' | 'WEP' | 'nopass';

export interface WifiConfig {
  ssid: string;
  password?: string;
  encryption: WifiEncryption;
  isHidden: boolean;
  outputFile: string;
}
