import { initPjs } from "tsparticles-slim/dist/pjs";
import { MainFull } from "./main";
import { CanvasUtils, ColorUtils, Constants, Utils } from "tsparticles-core/dist/Utils";
import { IOptions as ISlimOptions } from "tsparticles-core/dist/Options/Interfaces/IOptions";
import { IAbsorberOptions } from "tsparticles-plugin-absorbers";
import { IEmitterOptions } from "tsparticles-plugin-emitters";
import { IPolygonMaskOptions } from "tsparticles-plugin-polygon-mask";
import { RecursivePartial } from "tsparticles-core";

const tsParticles = new MainFull();

tsParticles.init();

const { particlesJS, pJSDom } = initPjs(tsParticles);

export * from "tsparticles-core/dist/Core/Container";
export * from "tsparticles-core/dist/Enums";
export * from "tsparticles-plugin-absorbers/dist/Enums";
export * from "tsparticles-plugin-emitters/dist/Enums";
export * from "tsparticles-plugin-polygon-mask/dist/Enums";
export * from "tsparticles-plugin-absorbers";
export * from "tsparticles-plugin-emitters";
export * from "tsparticles-plugin-polygon-mask";
export { CanvasUtils, ColorUtils, Constants, Utils };
export * from "tsparticles-core/dist/Types";
export { particlesJS, pJSDom, tsParticles };
export type IOptions = ISlimOptions & IAbsorberOptions & IEmitterOptions & IPolygonMaskOptions;
export type ISourceOptions = RecursivePartial<IOptions>;
