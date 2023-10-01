import { event , Events} from '../utils/index.js';
export default event(Events.MessageCreate, ({ log }, msg) => {
    //log that this event is active
    // log("message recieved");
    // // log the message content
    // log("Raw message:", msg);
    // log("message content:", msg.content);
    if (msg.content === "ping") {
        log("ping recieved");
        return msg.reply("pong!");
    }
});
// create our first message event ping


