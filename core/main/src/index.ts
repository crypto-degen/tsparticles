import { Main } from "./main";
import { initPjs } from "./pjs";
import type { IOptions } from "./Options/Interfaces/IOptions";
import type { RecursivePartial } from "./Types";

/* ---------- tsParticles functions - start ------------ */
const tsParticles = new Main();

tsParticles.init();

const { particlesJS, pJSDom } = initPjs(tsParticles);

export * from "./Core/Container";
export * from "./Enums";
export * from "./Utils";
export * from "./Types";
export { tsParticles, particlesJS, pJSDom };
export type { IOptions };
export type ISourceOptions = RecursivePartial<IOptions>;
