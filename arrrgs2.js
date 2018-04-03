// Rearrange try, catch, printf statements, don't change functionality too much.  version 2 of args catcher.

"use strict";


const checker=(a, b, c)=>{
	console.log(`^^^^^`);
	let someArgs;
	try {
		someArgs = Array.from(arguments);
	} catch(error){
		console.log("Pickle.")
	}
	console.log(`Your array has _${someArgs}_`);
};

checker("wren");
checker(["wren", "horse"]); 
checker();
checker(2);




// error catch for undefined args