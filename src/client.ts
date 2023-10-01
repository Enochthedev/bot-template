import { Client, GatewayIntentBits} from 'discord.js';
import { keys } from './keys.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

client.login(keys.clientToken)
.catch((error) => {
    console.error(error);
    process.exit(1);
});