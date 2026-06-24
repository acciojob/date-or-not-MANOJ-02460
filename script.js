var isDate = function (input) {
  //   write your code here

	if(input === new Date()){
		return true
	}
	return false
	
};
  
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
