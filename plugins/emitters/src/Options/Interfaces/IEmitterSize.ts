import type { SizeMode } from "tsparticles-core/dist/Enums";
import type { IDimension } from "tsparticles-core/dist/Core/Interfaces/IDimension";

/**
 * @category Emitters Plugin
 */
export interface IEmitterSize extends IDimension {
    mode: SizeMode | keyof typeof SizeMode;
}
