// Evan mistergenest@twitter April 2, 2018
// SIMPLE TYPING FROM MEMORY: 
// Throw an error and catch it


// next 
// write a Python style, modern ECMA6 for-loop
// implement from memory error throw - catch



function fireworks(a){
	let tigers = [6, 4, 33]; 
	let mudhens = Array.from(tigers);
	for(let x of mudhens){
		console.log(`Kapow, ${x}`);
	}
}

fireworks();
fireworks(3, "yeah");

// calling this "ent.js" because my mnemonic:

// DRY      CATCH ERROR       E.N.T. bkwds

// try{} catch(error){}       throw new Error("yuck" + error);