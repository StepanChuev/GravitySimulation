'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineWidth = 1;

const system = new System([
	new Particle(canvas.width / 2, canvas.height / 2, 0, 0, 100),
	new Particle(canvas.width / 2, canvas.height / 2 - 100, 0.8, 0, 7),
	new Particle(canvas.width / 2, canvas.height / 2 + 250, -0.65, 0, 1),
	new Particle(canvas.width / 2, canvas.height / 2 + 400, -0.50, 0, 0.1),
	new Particle(canvas.width / 2, canvas.height / 2 + 380, -0.15, 0, 0.00001),
], 0);

const systemDrawParams = [
	{
		fillStyle: "#ff0",
		radius: 10
	},

	{
		fillStyle: "#00f",
		radius: 7
	},

	{
		fillStyle: "#f00",
		radius: 7
	},

	{
		fillStyle: "#0f0",
		radius: 7
	},

	{
		fillStyle: "#fff",
		radius: 3
	},
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
