import { Unit } from "../units/unit";
import { ResourceType } from "./resource-type";

export abstract class Resource {

	protected baseMaxiumumValue: number;
	protected currentValue: number;
    protected unit: Unit;

	constructor(unit: Unit, currentValue: number, baseMaxiumumValue: number) {
		this.unit = unit;
		this.baseMaxiumumValue = baseMaxiumumValue;
		this.setCurrentValue(currentValue);
    }

    /**
     * Returns currentValue as percentage.
     * 
     * @return Percentage.
     */
    public getPercentage(): number {
		return this.currentValue / this.getMaximumValue();
	}

    /**
     * Sets the current Resource value to value.
     *
     * @param newCurrentValue The new current Resource value.
     */
    public setCurrentValue(newCurrentValue: number): void {
		this.currentValue = this.checkCurrentValue(newCurrentValue);
	}

    /**
     * Increases the current Resource value by value but not over the Resource
     * cap.
     *
     * @param value The value by which the current Resource value will be
     * increased.
     */
    public increaseCurrentValue(value: number): void {
		this.setCurrentValue(this.currentValue + value);
	}

    /**
     * Sets the BaseMaxValue to value.
     *
     * @param newBaseMaximumValue The new BaseMaxValue.
     */
    public setBaseMaxValue(newBaseMaximumValue: number): void {
		this.baseMaxiumumValue = (this.baseMaxiumumValue + newBaseMaximumValue > 0) ? this.baseMaxiumumValue + newBaseMaximumValue : 0;
		this.setCurrentValue(this.currentValue);
	}

    /**
     * Returns the BaseMaxValue.
     *
     * @return The BaseMaxValue.
     */
    public getBaseMaxValue(): number {
		return this.baseMaxiumumValue;
	}

    /**
     * Return the current Resource value.
     *
     * @return The current Resource value.
     */
    public getCurrentValue(): number {
		return this.currentValue;
	}

	public getMaximumValue(): number {
		return this.baseMaxiumumValue + this.getAddedMaximumValue();
	}

	/**
     * Returns the value that will be added to the base maximum.
     *
     * @return The Resource cap.
     */
	public abstract getAddedMaximumValue(): number;

	public abstract getType(): ResourceType;
	
	/**
	 * Changes the input value to a valid range.
	 * 
	 * @param value The new value for the currentvalue.
	 */
	protected checkCurrentValue(value: number): number {
        if (value < 0) {
            return 0;
        }
        if (value > this.getMaximumValue()) {
            return this.getMaximumValue();
        }
        return value;
    }
}