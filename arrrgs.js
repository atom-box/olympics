/* Just a quick test to see */
/* whether I understand the args */
/* passed into a function.*/
/*  by mistergenest@twitter.com */
/* March 30, 2018        */


let cicero = function(x, y, z){
	console.log("Cicero speaks!");
	console.log(`Citizens, anticipate _${arguments.length}_ things.`);
	console.log(arguments[0]);
}  ;
cicero();
console.log("and then,");
cicero('Herrick Lane', '1', 1);
/*==============================
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}
func1('anchovy','bread','celery');
============================*/