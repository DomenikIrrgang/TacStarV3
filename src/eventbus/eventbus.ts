import { Event } from "./event";
import { EventbusListener } from "./eventbus-listener";

export class Eventbus {

	private listeners: EventbusListener[] = [];

	public dispatchEvent(event: Event, ...args: any[]): void {
		for (const listener of this.listeners) {
			if (listener.getEvents().find(element => element === event) !== -1) {
				listener.onEvent(event, args);
			}
		}
	}

	public addEventListener(eventListener: EventbusListener): void {
		this.listeners.push(eventListener);
	}

	public removeEventBusListener(eventBusListener: EventbusListener): void {
		this.listeners.find((listener, index) => {
			if (listener === eventBusListener) {
				this.listeners.splice(index, 1);
				return true;
			}
			return false;
		});
	}
}