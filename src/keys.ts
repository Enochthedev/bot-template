import { getEnvVariable } from './utils/index.js';

export const keys = {
    clientToken: getEnvVariable("BOT_TOKEN"),
    /// CHANGE "BOT_TOKEN" TO "CLIENT_TOKEN"
} as const;

export default keys;
