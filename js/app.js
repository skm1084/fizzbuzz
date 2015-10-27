function checkNumber() {
var number = prompt('Please enter a number', '1-100');
//alert (isNaN(number));
	//var x = isNaN(number);
	if (number == true){
		myFunction();
	} else if(isNaN(number)){
		prompt("Please enter a real number");
	} else
		checkNumber();
}

	function myFunction(){
		console.log(number);
		for (var i = 1; i <= parseInt(number); i++) {
		   var string = '';
		   //If 'i' is divisible by 3, 'Fizz'
		   if (i % 3 == 0){
		   		string += 'Fizz';
		   }
		   //If 'i' is divisible by 5, 'Buzz'
		   if (i % 5 == 0){
		   		string += 'Buzz';
		   }
		   //Otherwise, show 'i' as the number
		    if (string == '') {
		        string += i;
		    }
		    console.log(string);
		}	
	}	
//myFunction(number);

