export default class MathUtils {

  static isInRange(value: number, minValue: number, maxValue: number, inclusive: boolean = true): boolean {
    return (value > minValue && value < maxValue) || (inclusive && [ minValue, maxValue ].indexOf(value) > -1);
  }

  static toRange(value: number, minValue: number, maxValue: number): number {
    return Math.min(Math.max(value, minValue), maxValue);
  }

  static toNearestPowerOfTwo(value: number): number {
    return Math.pow(2, Math.round(Math.log2(value)));
  }

}
