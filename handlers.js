'use strict';

const createBtnHandler = () => {
	const inputs = document.createElement('div');
	const okBtn = document.createElement('button');
	const cancelBtn = document.createElement('button');
	const br = document.createElement('br');

	for (let i = 0; i < paramsForCreate.length; i++){
		let label = document.createElement('label');
		let input = document.createElement('input');
		let br2 = document.createElement('br');

		input.className = "num";
		input.id = paramsForCreate[i];
		label.textContent = paramsForCreate[i] + ": ";
		inputs.append(label, input, br2);
	}

	okBtn.className = "btn";
	cancelBtn.className = "btn";

	okBtn.textContent = "OK";
	cancelBtn.textContent = "Cancel";

	panel.append(inputs, br, okBtn, cancelBtn);

	okBtn.addEventListener("click", () => {
		const particle = new Particle();

		drawParams.push({});

		for (let i = 0; i < paramsForCreate.length; i++){
			if (particle.hasOwnProperty(paramsForCreate[i])){
				let input = document.getElementById(paramsForCreate[i]);

				particle[paramsForCreate[i]] = +input.value;
			}

			else {
				let input = document.getElementById(paramsForCreate[i]);

				drawParams[drawParams.length - 1][paramsForCreate[i]] = input.value;
			}
		}

		system.particles.push(particle);
	});

	cancelBtn.addEventListener("click", () => {
		inputs.remove();
		okBtn.remove();
		cancelBtn.remove();
		br.remove();
	});
};

const removeBtnHandler = () => {
	const removeInput = document.createElement('input');
	const okBtn = document.createElement('button');
	const cancelBtn = document.createElement('button');
	const br = document.createElement('br');

	removeInput.className = "num";
	okBtn.className = "btn";
	cancelBtn.className = "btn";

	removeInput.placeholder = "Enter the number";
	okBtn.textContent = "OK";
	cancelBtn.textContent = "Cancel";
	panel.append(removeInput, br, okBtn, cancelBtn);

	okBtn.addEventListener("click", () => {
		system.particles.splice(+removeInput.value - 1, 1);
		drawParams.splice(+removeInput.value - 1, 1);
	});

	cancelBtn.addEventListener("click", () => {
		removeInput.remove();
		okBtn.remove();
		cancelBtn.remove();
		br.remove();
	});
};
