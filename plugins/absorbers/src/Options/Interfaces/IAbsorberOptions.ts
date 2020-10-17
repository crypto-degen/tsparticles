import type { SingleOrMultiple } from "tsparticles-core/dist/Types";
import type { IAbsorber } from "./IAbsorber";
import type { IInteractivity } from "tsparticles-core/dist/Options/Interfaces/Interactivity/IInteractivity";
import type { IModes } from "tsparticles-core/dist/Options/Interfaces/Interactivity/Modes/IModes";

/**
 * @category Absorbers Plugin
 */
export interface IAbsorberOptions {
    absorbers: SingleOrMultiple<IAbsorber>;
    interactivity: IInteractivity & {
        modes: IModes & {
            absorbers: SingleOrMultiple<IAbsorber>;
        };
    };
}
