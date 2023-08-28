'use strict';

const G = 1; // 6.67430e-11

class Particle {
	constructor(x, y, vx, vy, weight){
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.weight = weight;
	}

	static distance(x1, y1, x2, y2){
		return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
	}

	gravityForce(particle){
		const distance = Particle.distance(this.x, this.y, particle.x, particle.y);
		const dx = particle.x - this.x, dy = particle.y - this.y;
		const force = ((G * particle.weight * this.weight) / (distance ** 2));

		return {
			x: dx * force / distance,
			y: dy * force / distance
		};
	}

	calculateAcceleration(particle){
		const force = this.gravityForce(particle);

		return {
			x: (force.x / particle.weight),
			y: (force.y / particle.weight)
		};
	}

	calculateVelocities(particle){
		const acceleration = this.calculateAcceleration(particle);
		const velocities = {
			vx: this.vx,
			vy: this.vy
		};

		velocities.vx += acceleration.x;
		velocities.vy += acceleration.y;

		return velocities;
	}
}