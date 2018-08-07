import { Event } from "./event";
import { EventbusListener } from "./eventbus-listener";

export class Eventbus {

	private listeners: EventbusListener[];
	private eventCallbacks: Array<Array<(...args: any[]) => void>>;
	private static instance: Eventbus = new Eventbus();

	constructor() {
		this.reset();
	}

	public static getInstance(): Eventbus {
		return Eventbus.instance;
	}

	public dispatchEvent(event: Event, ...args: any[]): void {
		for (const listener of this.listeners) {
			if (listener.getEvents().find(element => element === event) !== -1) {
				listener.onEvent(event, args);
			}
		}
		for (const callback of this.eventCallbacks[event]) {
			callback(args);
		}
	}

	public addEventCallback(event: Event, callback: (...args: any[]) => void): void {
		this.eventCallbacks[event].push(callback);
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

	public reset(): void {
		this.listeners = [];
		this.eventCallbacks = [];
		for (let event of Object.keys(Event)) {
			this.eventCallbacks[event] = [];
		}
	}
}