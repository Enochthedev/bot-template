import { getEnvVariable } from './utils/index.js';

export const keys = {
    clientToken: getEnvVariable("CLIENT_TOKEN"),
} as const;

export default keys;
