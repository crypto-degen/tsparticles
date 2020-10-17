import { MainSlim } from "./main";
import { initPjs } from "./pjs";
import {
    CanvasUtils,
    Circle,
    CircleWarp,
    ColorUtils,
    Constants,
    Point,
    Rectangle,
    Utils,
} from "tsparticles-core/dist/Utils";
import type { IOptions } from "tsparticles-core/dist/Options/Interfaces/IOptions";
import type { RecursivePartial } from "tsparticles-core/dist/Types";

/* ---------- tsParticles functions - start ------------ */
const tsParticles = new MainSlim();

tsParticles.init();

const { particlesJS, pJSDom } = initPjs(tsParticles);

export * from "tsparticles-core/dist/Core/Container";
export * from "tsparticles-core/dist/Enums";
export { CanvasUtils, Circle, CircleWarp, ColorUtils, Constants, Point, Rectangle, Utils };
export * from "tsparticles-core/dist/Types";
export { tsParticles, particlesJS, pJSDom };
export { IOptions };
export type ISourceOptions = RecursivePartial<IOptions>;
