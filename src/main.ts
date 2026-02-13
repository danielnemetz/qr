import * as fs from 'fs';
import * as path from 'path';
import { config } from './config';
import { buildQrPayload } from './buildFromPayload';
import { composeImageBuffer } from './image';
import { promptConfig } from './prompt';

promptConfig()
  .then(({ type, payload }) => {
    const { data, labelLines, filename } = buildQrPayload(type, payload);
    const outputFile = path.join(config.outputDir, `${filename}.png`);
    return composeImageBuffer(data, undefined, labelLines).then((buffer) => ({
      buffer,
      outputFile,
    }));
  })
  .then(({ buffer, outputFile }) => {
    fs.writeFileSync(outputFile, buffer);
    console.log(`Success! Saved to ${outputFile}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
