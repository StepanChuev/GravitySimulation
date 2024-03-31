'use strict';

class System {
	constructor(particles, ignoreIndex = -1){
		this.particles = particles;
		this.ignoreIndex = ignoreIndex;
	}

	update(){
		for (let i = 0; i < this.particles.length; i++){
			if (i === this.ignoreIndex){
				continue;
			}

			this.particles[i].update(this.particles, i);
		}
	}
}
