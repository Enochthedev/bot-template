import { event, Events} from '../utils/index.js';

export default event(Events.ClientReady, ({ log }, client) => {
    log("Bot is ready!");
    log("Logged in as", client.user.username );
});