import type {
    Awaitable,
    Client,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    RESTPostAPIApplicationCommandsJSONBody
} from 'discord.js'
import { LogMethod } from './index.js';

export interface CommandProps {
    interaction: ChatInputCommandInteraction<"cached">,
    client: Client,
    log: LogMethod
}

export type CommandCallback = (props: CommandProps) => Awaitable<unknown>;

/// Command meta for slash commands
export type CommandMeta = 
    | SlashCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
    | RESTPostAPIApplicationCommandsJSONBody
/// Internal struct that represents a command.
export interface Command {
    meta: CommandMeta,
    callback: CommandCallback,
}

/// Alternate way to provide meta
export function meta(data: RESTPostAPIApplicationCommandsJSONBody): CommandMeta {
    return data;
};

/// Creates a command struct.
export function command(meta: CommandMeta, callback: CommandCallback): Command {
    return { meta, callback };
}
