import { particlesJS, pJSDom, tsParticles } from "tsparticles-slim";
import { IOptions as ISlimOptions } from "tsparticles-core/dist/Options/Interfaces/IOptions";
import { AbsorbersPlugin, IAbsorberOptions } from "tsparticles-plugin-absorbers";
import { EmittersPlugin, IEmitterOptions } from "tsparticles-plugin-emitters";
import { IPolygonMaskOptions, PolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { RecursivePartial } from "tsparticles-core";

tsParticles.addPlugin(AbsorbersPlugin);
tsParticles.addPlugin(EmittersPlugin);
tsParticles.addPlugin(PolygonMaskPlugin);

export * from "tsparticles-core";
export * from "tsparticles-slim";
export * from "tsparticles-plugin-absorbers";
export * from "tsparticles-plugin-emitters";
export * from "tsparticles-plugin-polygon-mask";
export { particlesJS, pJSDom, tsParticles };
export type IOptions = ISlimOptions & IAbsorberOptions & IEmitterOptions & IPolygonMaskOptions;
export type ISourceOptions = RecursivePartial<IOptions>;
