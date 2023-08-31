'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineWidth = 1;

const system = new System([
	new Particle(canvas.width / 2, canvas.height / 2, 0, 0, 100),
	new Particle(canvas.width / 2, canvas.height / 2 - 150, 0.8, 0, 10),
], -1);

const systemDrawParams = [
	{
		fillStyle: "#ff0",
		radius: 10
	},

	{
		fillStyle: "#00f",
		radius: 7
	}
];


animation({
	render(){
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < systemDrawParams.length; i++){
			context.beginPath();
			context.fillStyle = systemDrawParams[i].fillStyle;
			context.arc(system.particles[i].x, system.particles[i].y, systemDrawParams[i].radius, 0, 2 * Math.PI);
			context.fill();
		}
	},

	update(){
		system.update();
	}
});
