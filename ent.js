// Evan mistergenest@twitter April 2, 2018
// SIMPLE TYPING FROM MEMORY: 
// Throw an error and catch it


// next at Burger King
// write one function with all this: throw/catch(error)-return followed by the array behavior


function fireworks(a){
	let mudhens = [];
	console.log("==========");
	try {
		mudhens = Array.from(a);
	} catch(error) {
		mudhens = "warning!";
		//return; 
	}
	for(let x of mudhens){
		console.log(`Kapow, ${x}`);
	}
}

fireworks("woof");
fireworks(3, "yeah");
fireworks();
fireworks(undefined);
fireworks([3, "yeah"]);

// calling this "ent.js" because my mnemonic:

// DRY      CATCH ERROR       E.N.T. bkwds

// try{} catch(error){}       throw new Error("yuck" + error);