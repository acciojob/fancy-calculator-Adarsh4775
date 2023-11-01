//your JS code here. If required.
function fancyCalc(a,b){
    if(a >= 0 && b >= 0){
	let multiNum = a * 2;
	let total = multiNum + b;
		return "The final result is: " + total;
	}
	else{
		return "Enter a Valid Number in Both Inputs ";
	}
}
const a = parseFloat(prompt("Enter the First Input"));
const b = parseFloat(prompt("Enter the Second Input"));
alert(fancyCalc(a,b));