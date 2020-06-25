console.log('starting');

// This is the 5x5 tile for rocket

let C = [
'#364abf', '#364abf', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#f2b749', '#f2b749', '#364abf',
'#364abf', '#f2b749', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#f2b749', '#f2b749', '#364abf'
];

let O = [
'#364abf', '#364abf', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#f2b749', '#f2b749', '#364abf',
'#364abf', '#f2b749', '#364abf', '#f2b749', '#364abf',
'#364abf', '#f2b749', '#364abf', '#f2b749', '#364abf',
'#364abf', '#f2b749', '#f2b749', '#f2b749', '#364abf'
];

let L = [
'#364abf', '#364abf', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#364abf', '#364abf', '#364abf',
'#364abf', '#f2b749', '#f2b749', '#f2b749', '#364abf'
];


// Flips the pixel from transparent to colored

function flipOn() {
	let pixel = document.querySelector('.default');
	pixel.className = 'alive';
}

function flipOff() {
	let pixelArray = document.querySelectorAll('.alive');
	let pixel = pixelArray[pixelArray.length - 1];
	pixel.className = 'default';
}

// This creates the 5x5 tile

function createCodeTracker(tile, index) {
	for (let i = 0; i < 25; i++) {
		let pixel = document.createElement('div');
		pixel.style.width = '15px';
		pixel.style.height = '15px';
		pixel.style.backgroundColor = tile[i];
		pixel.className = 'default';
		document.getElementsByClassName('tile')[index].appendChild(pixel);
	}
}


createCodeTracker(C, 0);
createCodeTracker(O, 1);
createCodeTracker(O, 2);
createCodeTracker(L, 3);