import * as path from 'path';
import { config } from './config';
import type { WifiConfig, WifiEncryption } from './types';

const clearPwd = process.argv.includes('--clear-pwd');

export const promptConfig = async (): Promise<WifiConfig> => {
  const { input, password, select } = await import('@inquirer/prompts');

  const ssid = await input({
    message: 'SSID (Netzwerkname):',
    required: true,
  });

  const encryption = await select<WifiEncryption>({
    message: 'Verschlüsselung:',
    choices: [
      { name: 'WPA / WPA2 / WPA3', value: 'WPA' },
      { name: 'WEP',               value: 'WEP' },
      { name: 'Keine (offen)',     value: 'nopass' },
    ],
    default: 'WPA',
  });

  let pwd: string | undefined;
  if (encryption !== 'nopass') {
    if (clearPwd) {
      pwd = await input({
        message: 'Passwort:',
        required: true,
      });
    } else {
      pwd = await password({
        message: 'Passwort:',
        mask: '*',
      });
    }
  }

  const filename = ssid.replace(/[^a-zA-Z0-9_-]/g, '_') + '.png';
  const outputFile = path.join(config.outputDir, filename);

  return {
    ssid,
    password: pwd,
    encryption,
    isHidden: false,
    outputFile,
  };
};
