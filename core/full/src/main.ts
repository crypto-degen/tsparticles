import { MainSlim } from "tsparticles-slim/dist/main";
import { AbsorbersPlugin } from "tsparticles-plugin-absorbers";
import { EmittersPlugin } from "tsparticles-plugin-emitters";
import { PolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

/**
 * Main class for creating the singleton on window.
 * It's a singleton proxy to the static [[Loader]] class for initializing [[Container]] instances
 * @category Main
 */
export class MainFull extends MainSlim {
    constructor() {
        super();

        this.addPlugin(AbsorbersPlugin);
        this.addPlugin(EmittersPlugin);
        this.addPlugin(PolygonMaskPlugin);
    }
}
