//Only Keep the Last Few___Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. 
//Given array arr and number X, remove all except the last X elements, 
//and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it

function keepLastFew(arr, num) {
    for (var i = 0; i < num; i++) {
    arr.shift();
    }
    console.log(arr);
    return arr;
    }
    keepLastFew([1,2,3,4,5,6,7,8], 4);



//Math Help___Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a 
//function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).





//Poor Kenny___Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 
//25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
function whatHappensToday(probability) {
    if (probability <= 0.10) {
    console.log("volcano eruption disaster!");
    } else if (0.11 < probability <= 0.25) {
    console.log("tsunami~~!");
    } else if (0.26 < probability <= 0.45) {
    console.log("get to cover, earthquake!");
    } else if (0.46 < probability <= 0.70) {
    console.log("stay inside and keep warm from the blizzard!");
    } else if (0.71 < probability <= 1.00) {
    console.log("on no, meteor strike!")
    } else {
    console.log("whew, no natural disasters today!");
    }
    }
    whatHappensToday(.10);
    whatHappensToday(.23);




//What Really Happened?___Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create 
//whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, 
//all five might occur today – or none. Maybe Kenny will survive!





//Soaring IQ___Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, 
//his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th 
//day (the end of 14 full weeks). What is Bogdan’s final IQ?


var iq = 101;

for (i = 1; i <= 98; i++) {
  iq = iq + (.01 * i);
  console.log("IQ for day " + i + " is " + iq + ".");
}

console.log("Student's final IQ is " + iq + '.');


//Letter Grade___Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get 
//an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "
//Score: 61. Grade: D"





//More Accurate Grades__For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry,
// Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .