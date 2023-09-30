# Discord Bot Template

This is a template for creating a Discord bot using Discord.js library. It includes the basic setup for connecting to Discord API, handling events, and responding to messages.

## Getting Started

1. Clone this repository: `git clone https://github.com/username/repo.git`
2. Install dependencies: `npm install`
3. Create a new Discord bot application and get the token from the Discord Developer Portal.
4. Copy the `.env.example` file to `.env` and update the `DISCORD_TOKEN` variable with your bot token. See [here](#env-setup) for more details.
5. Start the bot: `npm start`


## Table of Contents






## env-setup





## Features

### Ping Command

The bot responds with "Pong!" when you send a message with the prefix `!ping`.

### Random Meme Command

The bot responds with a random meme from the `memes` folder when you send a message with the prefix `!meme`.

### Ready Event

The bot logs "Ready!" to the console when it successfully connects to the Discord API.

### Message Event

The bot logs the message content and author to the console when it receives a message.

## Contributing

Feel free to contribute to this project by submitting a pull request or creating an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
