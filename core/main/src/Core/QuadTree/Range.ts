import type { ICoordinates } from "../Interfaces/ICoordinates";

/**
 * @category Utils
 */
export abstract class Range {
    public readonly position: ICoordinates;

    protected constructor(x: number, y: number) {
        this.position = {
            x: x,
            y: y,
        };
    }

    public abstract contains(point: ICoordinates): boolean;

    public abstract intersects(range: Range): boolean;
}
