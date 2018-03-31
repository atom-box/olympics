"use strict";


const checker=(a, b, c)=>{
	let length1;
	try {
		length1 = Array.from(undefined);
	} catch(error){
		console.log(`Caught this _${error}_ but kept going.`);
		length1 = 0;
	}
}


console.log(`Hey the array length result is now _${checker()}_`);
console.log(`Hey the array length result is now _${checker(3,2)}_`);





// this seems to work

// error catch for undefined args