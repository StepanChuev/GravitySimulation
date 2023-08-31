'use strict';

class System {
	constructor(particles, mainParticleIndex = -1){
		this.particles = particles;
		this.mainParticleIndex = mainParticleIndex;
	}

	calculateAccelerations(){
		const accelerations = [];

		for (let i = 0; i < this.particles.length; i++){
			accelerations.push({ x: 0, y: 0 });

			if (i === this.mainParticleIndex){
				continue;
			}

			for (let j = 0; j < this.particles.length; j++){
				if (i === j) continue;

				const newAccelerations = this.particles[i].calculateAcceleration(this.particles[j]);

				accelerations[i].x += newAccelerations.x;
				accelerations[i].y += newAccelerations.y;
			}
		}

		return accelerations;
	}

	calculateVelocities(){
		const velocities = [];
		const accelerations = this.calculateAccelerations();

		for (let i = 0; i < accelerations.length; i++){
			velocities.push({
				vx: this.particles[i].vx + accelerations[i].x,
				vy: this.particles[i].vy + accelerations[i].y
			});
		}

		return velocities;
	}

	update(){
		const velocities = this.calculateVelocities();

		for (let i = 0; i < this.particles.length; i++){
			this.particles[i].vx = velocities[i].vx;
			this.particles[i].vy = velocities[i].vy;

			this.particles[i].x += this.particles[i].vx;
			this.particles[i].y += this.particles[i].vy;
		}
	}
}
