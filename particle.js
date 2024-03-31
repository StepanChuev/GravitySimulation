'use strict';

class Particle {
	constructor(x, y, vx, vy, weight, G = 1){
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.weight = weight;
		this.G = G;
	}

	calculateForce(x2, y2, weight2){
		const force = this.G * (this.weight * weight2) / (distanceBetween(this.x, this.y, x2, y2) ** 2);

		return {
			x: force * Math.sqrt((x2 - this.x) ** 2 / ((x2 - this.x) ** 2 + (y2 - this.y) ** 2)) * Math.sign(x2 - this.x),
			y: force * Math.sqrt((this.y - y2) ** 2 / ((x2 - this.x) ** 2 + (y2 - this.y) ** 2)) * Math.sign(y2 - this.y)
		};
	}

	calculateAcceleration(x2, y2, weight2){
		const force = this.calculateForce(x2, y2, weight2);

		return {
			x: force.x / this.weight,
			y: force.y / this.weight,
		};
	}

	updateVelocity(particles, ignoreIndex = -1){
		for (let i = 0; i < particles.length; i++){
			if (i === ignoreIndex){
				continue;
			}

			const acceleration = this.calculateAcceleration(particles[i].x, particles[i].y, particles[i].weight);

			this.vx += acceleration.x;
			this.vy += acceleration.y;
		}
	}

	updateCoordinates(){
		this.x += this.vx;
		this.y += this.vy;
	}

	update(particles, ignoreIndex = -1){
		this.updateVelocity(particles, ignoreIndex);
		this.updateCoordinates();
	}
}
