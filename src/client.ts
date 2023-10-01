import { Client, GatewayIntentBits} from 'discord.js';
import { registerEvents } from './utils/index.js';
import { keys } from './keys.js';
import Events from './events/index.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        //add message intents
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.MessageContent,

    ],
});

registerEvents(client, Events);

client.login(keys.clientToken)
.catch((error) => {
    console.error(error);
    process.exit(1);
});