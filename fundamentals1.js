//Print -52 to 1066_Print integers from -52 to 1066 using a FOR loop.//

for (var i = -52; i < 1067; i++) {
console.log(i);
}


//Don’t Worry, Be Happy_Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.//

for (var i = 1; i < 99; i++) {
    console.log("good morning!")
    }
    console.log(beCheerful());

//Multiples of Three – but Not All_Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.//
for (var i = -300; i < 1; i += 3) {
    if (i == -6 || i == -3) {
    continue;
    }
    console.log(i);
    }

//Printing Integers with While_Print integers from 2000 to 5280, using a WHILE.//

var i = 2000
while (i < 5281) {
console.log(i);
i++;
}

//You Say It’s Your Birthday_If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."//

var birthDay = Math.floor((Math.random() * 31) + 1);
var birthMonth = Math.floor((Math.random() *12) + 1);
if (birthDay == 8 || birthMonth == 7) {
console.log("How did you know?")
} else {
console.log("Just another day…")
}
console.log("Birthday number = " + birthDay, "Birthmonth number = " + birthMonth)

//Leap Year_Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, 
//unless it is divisible by 100. However, if it is divisible by 400, then it is.//
function leapYear(year) {
    if (((year % 4 == 0) && (year % 100 !=0)) || (year % 400 == 0 )) {
    console.log("it is a Leap Year");
    } else {
    console.log("it is NOT a Leap Year");
    }
    
    }
    console.log(leapYear(4000));

//Print and Count_Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.//
for (var i = 512; i < 4097; i++){
    if (i % 5 == 0) {
    console.log(i);
    }
    }

//Multiples of Six_Print multiples of 6 up to 60,000, using a WHILE.//
var i = 0
while (i < 600001) {
i++;
if (i % 6 == 0) {
console.log(i)
}
}

//Counting, the Dojo Way_Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".//
for (var i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 10 != 0) {
    console.log("Coding");
    continue;
    }
    if (i % 10 == 0) {
    console.log("Dojo");
    continue;
    }
    console.log(i);
    }

//What Do You Know?_Your function will be given an input parameter incoming. Please console.log this value.//
function ai(incoming) {
    sum = 0;
    for (var i = 1; i < 10; i++) {
    sum += i;
    }
    return sum;
    }
    console.log(ai(111));

//Whoa, That Sucker’s Huge_Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
var sum = 0;
for (var i = -300000; i 0) {
i -= 4;
console.log(i);
}
//Countdown by Fours_Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.//
var i = 2017
while (i > 0) {
i -= 1;
if(i % 4 == 0) {
console.log(i);
}
}

//Flexible Countdown_Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult 
//from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).


//The Final Countdown


