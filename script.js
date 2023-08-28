'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineWidth = 1;

const system = [
	new Particle(canvas.width / 2, canvas.height / 2, 0, 0, 100),
	new Particle(canvas.width / 2, canvas.height / 2 - 150, 0.2, 0, 10),
	new Particle(canvas.width / 2, canvas.height / 2 + 200, -0.1, 0, 5)
];


animation({
	render(){
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath();
		context.fillStyle = "#ff0";
		context.arc(system[0].x, system[0].y, 10, 0, 2 * Math.PI);
		context.fill();

		context.beginPath();
		context.fillStyle = "#00f";
		context.arc(system[1].x, system[1].y, 7, 0, 2 * Math.PI);
		context.fill();

		context.beginPath();
		context.fillStyle = "#f00";
		context.arc(system[2].x, system[2].y, 7, 0, 2 * Math.PI);
		context.fill();
	},

	update(){
		for (let i = 1; i < system.length; i++){
			const newVelocities = system[i].calculateVelocities(system[0]);

			system[i].vx = newVelocities.vx;
			system[i].vy = newVelocities.vy;

			system[i].x += system[i].vx;
			system[i].y += system[i].vy;
		}
	}
});