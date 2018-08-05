import { Event } from "./event";

export interface EventbusListener {
	onEvent(event: Event, ...args: any[]);
	getEvents(): Event[];
}