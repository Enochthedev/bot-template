import { ApplicationCommandOptionType, ApplicationCommandType, SlashCommandBuilder } from 'discord.js';
import { command, Reply, Color, meta } from '../utils/index.js';

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot for a response.')
    .addStringOption(option =>
        option
        .setName('message')
        .setDescription('Provide some text to send back.')
        .setMaxLength(100)
        .setRequired(false)
    );

const dataAlt = meta({ 
    name: 'ping',
    description: 'Ping the bot for a response.',
    type: ApplicationCommandType.ChatInput,
    options: [{
        name: 'message',
        description: 'Provide some text to send back.',
        type: ApplicationCommandOptionType.String,
        max_length: 100,
        required: false,
    }]
})

export default command(data, async ({ interaction }) => {
    const msg = interaction.options.getString('message') ?? 'Pong 🏓';

    return interaction.reply(
        Reply(msg, Color.Success)
    );
});