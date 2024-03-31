'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext("2d");
const G = 1;
const panelKey = "p";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#ff0";
context.fillStyle = "#ff0";

const system = new System([
	new Particle(canvas.width / 2, canvas.height / 2, 0, 0, 100, G), 
	new Particle(canvas.width / 2, canvas.height / 2 - 100, 0.8, 0, 7, G),
	new Particle(canvas.width / 2, canvas.height / 2 + 250, -0.67, 0, 1, G),
	new Particle(canvas.width / 2 + 300, canvas.height / 2, 0, -0.015, 0.01, G),
	new Particle(canvas.width / 2, canvas.height / 2 + 237, -0.4, -0.1, 0.01, G)
], 0);

const drawParams = [
	{
		color: "#ff0",
		radius: 12
	},

	{
	 	color: "#00f",
	 	radius: 7
	},

	{
		color: "#f00",
		radius: 7
	},

	{
		color: "#fff",
		radius: 2
	},

	{
		color: "#f0f",
		radius: 2
	}
];

const panel = document.querySelector('.panel');
const listBodies = document.querySelector('.info');
const inputTrp = document.querySelector('.transparency');
const checkboxDraw = document.querySelector('.draw');
const checkboxPause = document.querySelector('.pause');
const createBtn = document.querySelector('#create');
const removeBtn = document.querySelector('#remove');
const paramsForCreate = ["x", "y", "vx", "vy", "weight", "radius", "color"];

window.addEventListener("keypress", (event) => {
	if (event.key === panelKey){
		panel.hidden = !panel.hidden;
	}
});

createBtn.addEventListener("click", createBtnHandler);
removeBtn.addEventListener("click", removeBtnHandler);

animation({
	render(){
		if (checkboxPause.checked || !checkboxDraw.checked){
			return;
		}

		context.fillStyle = `rgba(0, 0, 0, ${inputTrp.value})`;

		context.beginPath();
		context.rect(0, 0, canvas.width, canvas.height);
		context.fill();

		for (let i = 0; i < system.particles.length; i++){
			context.fillStyle = drawParams[i].color;

			context.beginPath();
			context.arc(system.particles[i].x, system.particles[i].y, drawParams[i].radius, 0, Math.PI * 2);
			context.fill();
		}
	},

	update(){
		if (checkboxPause.checked){
			return;
		}

		listBodies.innerHTML = "";

		for (let i = 0; i < system.particles.length; i++){
			let li = document.createElement('li');

			li.innerHTML += `Body ${i + 1}<font color=${drawParams[i].color}>■</font>:</br>`;

			for (const key in system.particles[i]){
				li.innerHTML += `&nbsp;${key}: ${system.particles[i][key]}</br>`;
			}

			listBodies.append(li);
		}

		system.update();
	}
});
