import type { SingleOrMultiple } from "tsparticles-core/dist/Types";
import type { IDimension } from "tsparticles-core/dist/Core/Interfaces/IDimension";

/**
 * @category Polygon Mask Plugin
 */
export interface ILocalSvg {
    path: SingleOrMultiple<string>;
    size: IDimension;
}
