import type { ICoordinates } from "../Interfaces/ICoordinates";
import type { Particle } from "../Particle";

/**
 * @category Utils
 */
export class Point {
    constructor(public readonly position: ICoordinates, public readonly particle: Particle) {}
}
