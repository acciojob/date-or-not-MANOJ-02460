var isDate = function (input) {
  //   write your code here

	let d = new Date(input);

	if(Number.isNaN(d.getTime())){
		return false
	}

	return true; 
};
  
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
