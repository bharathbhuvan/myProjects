
var t0 = performance.now();
let str = 'Rotator';
let revStr = str.toLowerCase().split('').reverse();
let palind='';
let repeated='';

function poly(str){
if(str.length){
str.toLowerCase().split('').forEach((arr,index) =>{

	if(arr === revStr[index]){	
      repeated = repeated.concat(arr);
  }else if(repeated.length > palind.length){
  			palind = repeated;
        repeated='';
  }
  
})
	return repeated.length > palind.length?repeated:palind;
}
}
console.log(poly(str));
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")



