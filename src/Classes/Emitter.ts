import { Container } from "./Container";
import { ICoordinates } from "../Interfaces/ICoordinates";
import { IEmitter } from "../Interfaces/Options/Emitters/IEmitter";
import { Particle } from "./Particle";

export class Emitter {
	public position: ICoordinates;
	public lineLinkedDistance?: number;
	public lineLinkedWidth?: number;
	public moveSpeed?: number;
	public sizeValue?: number;
	public sizeAnimationSpeed?: number;

	private readonly container: Container;
	private startInterval?: number;
	public emitterOptions: IEmitter;

	constructor(container: Container, emitterOptions: IEmitter) {
		this.container = container;
		this.emitterOptions = emitterOptions;
		this.position = this.calcPosition();

		if (this.emitterOptions.autoStart) {
			this.start();
		}
	}

	public emit(): void {
		const container = this.container;
		const particle = new Particle(container, this.position, this);

		container.particles.addParticle(particle);
	}

	public start(): void {
		if (this.startInterval === undefined) {
			this.startInterval = setInterval(() => {
				this.emit();
			}, 1000 / this.emitterOptions.speed);
		}

		this.prepareToDie();
	}

	public stop(): void {
		const interval = this.startInterval;

		if (interval !== undefined) {
			clearInterval(interval);

			delete this.startInterval;
		}
	}

	private prepareToDie(): void {
		if (this.emitterOptions.life !== undefined) {
			setTimeout(() => {
				this.stop();

				this.position = this.calcPosition();
			}, this.emitterOptions.life * 1000);
		}
	}

	private calcPosition(): ICoordinates {
		const container = this.container;

		return this.emitterOptions.position ?? {
			x: Math.random() * container.canvas.dimension.width,
			y: Math.random() * container.canvas.dimension.height,
		}
	}
}