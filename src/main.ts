import { promptConfig } from './prompt';
import { composeImage } from './image';

promptConfig().then(composeImage);
