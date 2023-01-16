//Countdown___Create a function that accepts a number as an input. Return a new array that counts down by one, from the number 
//(as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function countDown(startNum) {
    let countDownArray = []
    for(let i = startNum; i >= 0; i-- ){
      countDownArray.push(i)
    }
    return countDownArray
  }
  
  console.log(countDown(5));

//Print and Return___Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(a, b) {
    console.log(a);
    return(b);
    }
    console.log(printReturn(2,11));


//First Plus Length___Given an array, return the sum of the first value in the array, plus the array’s length. What happens 
//if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
function firstPlusLength(arr) {
    if (typeof arr[0] != 'number') {
    arr[0] = 0 + arr.length;
    } else {
    arr[0] = arr[0] + arr.length;
    }
    console.log(arr[0]);
    return arr;
    }
    firstPlusLength([true,2,3,4,5]); 
    firstPlusLength([10,2,3,4,5]);


//Values Greater than Second___For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.




//Values Greater than Second, Generalized___Write a function that accepts any array, and returns a new array with the array values 
//that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?


//This Length, That Value__+Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function lengthValues(num1, num2) {
    var newArr = [];
    newArr.push(num1, num2);
    if (num1 == num2) {
    console.log(“Jinx!”);
    }
    console.log(newArr);
    return newArr;
    }


//Fit the First Value__Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
//if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".


//Fahrenheit to Celsius__Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number 
//of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheitToCelsius(num){
    celsius = 0;
    celsius = Math.floor((num = 32) * 9/5);
    console.log(celsius);
    return celsius;
    }
    fahrenheitToCelsius(82);



//Celsius to Fahrenheit___Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(num){
    fahrenheit = 0;
    fahrenheit = Math.floor((num * 9/5) + 32);
    console.log(fahrenheit);
    return fahrenheit;
    }
    celsiusToFahrenheit(27);