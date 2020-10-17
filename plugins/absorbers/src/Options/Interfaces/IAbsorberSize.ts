import { IValueWithRandom } from "tsparticles-core/dist/Options/Interfaces/IValueWithRandom";

export interface IAbsorberSize extends IValueWithRandom {
    limit?: number;
    density: number;
}
