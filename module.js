'use strict';

const distanceBetween = (x1, y1, x2, y2) => {
	return Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
}

const animation = ({render = () => {}, update = () => {}}) => {

	const tick = (timestamp) => {
		render(timestamp);
		update(timestamp);
		requestAnimationFrame(tick);
	};
	
	requestAnimationFrame(tick);
};
