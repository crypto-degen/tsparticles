import type { Container } from "../Container";
import type { Particle } from "../Particle";
import { Linker } from "./Linker";
import { Attracter } from "./Attracter";
import { Collider } from "./Collider";

export class InteractionManager {
	public static interact(p1: Particle, p2: Particle, container: Container): void {
		/* link particles */
		if (p1.particlesOptions.lineLinked.enable && p2.particlesOptions.lineLinked.enable) {
			Linker.link(p1, p2, container);
		}

		/* attract particles */
		if (p1.particlesOptions.move.attract.enable && p2.particlesOptions.move.attract.enable) {
			Attracter.attract(p1, p2, container);
		}

		/* bounce particles */
		if (p1.particlesOptions.move.collisions && p2.particlesOptions.move.collisions) {
			Collider.collide(p1, p2);
		}
	}
}
