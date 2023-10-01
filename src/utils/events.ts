import type { ClientEvents, Awaitable, Client } from "discord.js"; 
// Export events enum through here to reduce the amount of imports 
export { Events } from "discord.js";

export type LogMethod = (...args: unknown[]) => void;
export type EventKeys = keyof ClientEvents;

/// Props that will be passsed through the event callback.
export interface EventProps {
    client: Client;
    log: LogMethod;
}
export type EventCallback<T extends EventKeys>= (
    props: EventProps,
    ...args: ClientEvents[T]
) => Awaitable<unknown>;
