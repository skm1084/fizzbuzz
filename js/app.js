for (var i = 1; i <= 100; i++) {
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