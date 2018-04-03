//   Succesful rearrange -- this version doesn't work at all BUT cheerfully rolls along, complaining but NOT crashing


"use strict";


const nought=()=>{
	console.log(`^^^^^`);
	let someArgs = [];
	try {
		someArgs = Array.from(arguments);
	} catch(error){
		console.log("Pickle in 'nought'.")
	}
	console.log(`Your array has _${someArgs}_`);
};

const mono=(a)=>{
	console.log(`!!!!!!!!!`);
	let someArgs = [];
	try {
		someArgs = Array.from(a);
	} catch(error){
		console.log("Pickle in 'mono'.")
	}
	console.log(`Your array has _${someArgs}_`);
};

const tri=(a, b, c)=>{
	console.log(`((((((()))))))`);
	let someArgs = [];
	try {
		someArgs = Array.from(a, b, c);
	} catch(error){
		console.log("Pickle in 'tri'.")
	}
	console.log(`Your array has _${someArgs}_`);
};



nought("wren");				// CRASH
nought(["wren", "horse"]); 	// CRASH
nought();					// CRASH
nought(11, 13, 17);			// CRASH

mono("wren");     // works.  letter-array
mono(["wren", "horse"]); // works
mono();					// silent
mono(11, 13, 17);		// silent

tri("wren");    // works.  letter-array
tri(["wren", "horse"]);  // works
tri();					// silent
tri(11, 13, 17);		// silent



// error catch for undefined args