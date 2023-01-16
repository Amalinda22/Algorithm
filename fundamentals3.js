//Biggie Size___Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) 
//returns that same array, changed to [-1,"big","big",-5].
function positiveBig(arr) {
    for (var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
    arr[i] = arr[i];
    } else {
    arr[i] = "big";
    }
    }
    console.log(arr);
    return arr;
    }
    positiveBig([-1,2,-3,4,5,6,-1]);


//Print Low, Return High___Create a function that takes an array of numbers. The function should print the lowest value in the array, 
//and return the highest value in the array.

numbers = [2, 4, 9, 2, 0, 16, 24]

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }

  console.log(largest);
  console.log(smallest);
}

//Print One, Return Another____Build a function that takes an array of numbers. The function should print the second-to-last value in 
//the array, and return first odd value in the array.




//Double Vision____Given an array, create a function to return a new array where each value in the original has been doubled. Calling 
//double([1,2,3]) should return [2,4,6] without changing original.
function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
    }
    console.log(newArr);
    return newArr;
    }
    doubleVision([1,2,3,4,5]);


//Count Positives___Given an array of numbers, create a function to replace last value with the number of positive values. Example,  
//countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it._NO

var arr = [-1,1,1,1];
var numList=[];
var positiveNum = null;

for (let i =0; i< arr.length; i++){
    if (arr[i]< 0){
      positiveNum++;
    }
    else{
      numList.push(arr[i]);
    }
    
 }
     console.log(numList);



//Evens and Odds___Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" 
//Every time the array has three evens in a row, print "Even more so!"

function evensAndOdds(arr) {
    var threeOdds = 0;
    var threeEvens = 0;
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
    threeOdds++;
    if (threeOdds % arr[i]) {
    console.log("That's odd!");
    }
    } else {
    console.log("Even more so!");
    }
    }
    }
    evensAndOdds([1,1,1,2,3,2,2,2]);


//Increment the Seconds___Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementSeconds(arr){
    for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
    arr[i] += 1;
    }
    }
    console.log(arr);
    return arr;
    }
    incrementSeconds([1,2,1,2,1,2]);



//Previous Lengths___You are passed an array containing strings. Working within that same array, replace each string with a number – 
//the length of the string at previous array index – and return the array.

function previousLengths(arr) {
    for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
    arr[i] = arr[i].length;
    console.log("string");
    } else {
    console.log("not a string");
    }
    }
    console.log(arr);
    return arr;
    }
    previousLengths([1,"hello", "world", "amalinda"]);



//Add Seven to Most____Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function sevenToMost(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number'){
    newArr.push(arr[i] + 7);
    }
    }
    console.log(newArr);
    return newArr;
    }
    sevenToMost([1,2,3,4,5]);
    sevenToMost([1,"2","3",4,"five",6]);


//Reverse Array____Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].



//Outlook: Negative___Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].




//Always Hungry____Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
    counter++;
    console.log("yummy");
    } else if (arr[i] == arr[arr.length-1] && counter == 0) {
    console.log("I'm hungry");
    }
    }
    }
    alwaysHungry([1,2,3]);
    alwaysHungry(["food",1,2,3]);
    alwaysHungry(["food",1,"food",2,"food",3]);




//Swap Toward the Center___Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapOddIndexTowardsCenter(arr) {
    for(var i = 0; i < Math.floor(arr.length/2); i++) {
    if (i % 2 == 0) {
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    }
    }
    console.log(arr);
    return arr;
    }
    swapOddIndexTowardsCenter([1,2,3,4,5,6]);



//Scale the Array___Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
    arr[i] *= num;
    }
    console.log(arr);
    return arr;
    }
    scaleArray([1,2,3,4], 2);
    scaleArray([1,2,1,2], -1);


