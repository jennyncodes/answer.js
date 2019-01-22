//PG.16 
// Setting and Swapping
var myName = 'Jenny';

console.log(number);
console.log(myName);

var temp =  myName;
var myName=  number;
var number =  temp;

console.log(myName);
console.log(number);

// Print and Count
var counter= 0

for( var i = 512; i<=4096; i++){
  if( i%5==0){
   console.log(i);        
   counter++;
  }
}
console.log(counter);

// Print -52 to 1066
for(var num= -52; num<= 1066; num++){
  console.log(num);
}

//Multiples of Six
var i= 0

while( i<60000){
 if(i%6===0){
   console.log(i);
  }
  i++;
 }
 

// Don't Worry,Be Happy
function beCheerful(){
  
  for(var i=1; i<=98; i++){
    console.log("good morning!");
  }
}
beCheerful();

//Counting, the Dojo Way

for(var i= 1; i <=100; i++){
  if( i % 5===0 && i % 10===0){
  console.log('Coding Dojo');
  }
  else 
  if( i% 5===0){
  console.log('Coding');
}
 else{
   console.log(i);
 }
}

// Multiples of Three- but Not All

for(var i =-300; i<0; i++){
   if ((i % 3===0) && !(i === -3 || i === -6)){
   console.log(i);
 }
} 

//What Do You Know?
function whatDoYouKnow(incoming){
   console.log(incoming);
}


//Printing Integers with While

var i= 2000;

  while( i<=5280){
    console.log(i);
  i++;
}

//Whoa, That Sucker's Huge

sum = 0

for( var i= -300000; i<=300000; i++){
  if( i%2==0){
    
    sum = sum +i;
  }
}

//You Say It's Your Birthday


  var month= 11;
  var day= 13;
  
  for (var i = 1; i<=31; i++){
    if(i == month|| i == day){
      console.log('How did you know?');
    }
    else 
     console.log('Just another day....');
     
  }

//Countdown by Fours
  var i= 2016;

while (i >0){
  console.log(i);
  i=i-4;
}

//Leap Year
function leapYear(){
for(var i=0; i<=2019; i++){
 if( i% 4===0 && i%400===0){
   console.log('It is a leap year');
}
}
else
 if(i%100===0){
   console.log('Not a leap year');
 }
 }
}
//we call a year 
learYear();

//Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult){

  for(var i = highNum; i> lowNum; i=i+ mult){
    console.log(i);
  }
}
flexibleCountdown();

//The Final Countdown

function finalCountdown(param1, param2, param3, param4){
  
  while (param2 < param3){
    if((param2 % param1===0) && (param2!==param4)){
      console.log(param2);
    }
      param2 = param2 + 1;
  }
}

finalCountdown(3,5,17,9);

//PG. 20
//Countdown

function countDown(x){

var newCountDown = [];

if (x > 0){
  while(x >= 0) {
    newCountDown.push(x); //need to add numbers into the array so use push method.
      x--; //decrement the number to countdown x
    }
  } 
return newCountDown;
}
console.log(countDown(5));

// Print and Return
 
 function printOut(a,b){

  console.log(a);
  return b;
}
console.log(printOut(3,6));

//First Plus Length



function firstPlusLength(arr) {

  if (typeof arr[0] != 'number') { //typeof is a operation that allows you to probe the datatype of its operand, such as whether the variable is a sting, interger, or undefined.
    arr[0] = 0 + arr.length;
  } 
  else {
    arr[0] = arr[0] + arr.length;
  }
  console.log(arr[0]);
return arr;
}

firstPlusLength(['hello',5,10,4,]); // returns 4
firstPlusLength([10,2,3,4,5]); // returns 15

//Values Greater than Second

function greaterThanSecond(arr){ // need to create a function that is greater than arr[1] becayse arr[1] is in the second value
  var count = 0; // set counter to count how many numbers are greater than arr[1]

  for (var i = 0; i <arr.length; i++){
    if(arr[i]>arr[1]){
    console.log(arr[i]);
    count++;
   
    }
  }
return count;
}
greaterThanSecond([1,3,5,7,9,13]);
greaterThanSecond([4,8,18,10,90]);

// Values Greater than Second, Generalized

function greaterThanSecond(arr) {
  
  var newArr = [];

    for (var i = 0; i <arr.length; i++) {
      if (arr[i] > arr[1]){
       newArr.push(arr[i]);
       console.log(arr[i]);
    }
     else if (arr[i] == 0) {
    console.log('The array is empty');
    } 
    else if (arr[i] == 1) {
   console.log('There is only 1 element');
    } 
    else {
   }
  }
  console.log(newArr);
}
greaterThanSecond([1,2,3,4,5,6]);

//This Length, That Value

function lengthValues(num1, num2) {
  var newArr = [];
  newArr.push(num1, num2);

  if (num1 == num2) {
    console.log('Jinx!');
  }
  
  console.log(newArr);
  return newArr;
}
lengthValues(2,2);

//Fit the First Value
function firstValues(arr){

  if (arr[0] > arr.length) {
    console.log('Too big!');
} 
  else if (arr[0] < arr.length) {
    console.log('Too small!');
} 
 else
 {
  console.log('Just Right!');
  }
}
firstValues([10,1,2,3]);
firstValues([1,2,3,4]);
firstValues([4,1,2,3]);


//Fahrenheit to Celsius

function fahrenheitToCelsius(num){
  celsius = 0;

  celsius = Math.floor((num-32) * 5/9); //Math.floor() function that returns the largest integer less than or equal to a given number.
    console.log(celsius);
return celsius;
}
fahrenheitToCelsius(67);
fahrenheitToCelsius(80);

//Celsius to Fahrenheit
function celsiusToFahrenheit(num){
  fahrenheit = 0;
  
  fahrenheit = Math.floor((num * 9/5) + 32);
    console.log(fahrenheit);
  return fahrenheit;
}
celsiusToFahrenheit(7);

//PG.22
//Biggie Size

function positiveBig(arr) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] < 0) {
        arr[i] = arr[i];
      }
      else {
        arr[i] = "big";
      }
    }
    console.log(arr);
  return arr;
}

positiveBig([-1,2,-3,4,5,6,-1]);

//Print Low, Return High *

function printLowReturnHigh(arr){
  var low = arr[0];
  var high = arr[0];

   if (arr.length == 0) {
     console.log('The array is empty');
} 
  else if (arr.length == 1) {
    console.log('There is only 1 element');
} 
  else {
    for(var i = 0; i < arr.length; i++){
      if (arr[i]==high){
      high = arr[i];
    } 
  }
console.log(low);
}
return high;
}
printLowReturnHigh([3,5,10]); //work on this problem, still not returning high value.

// Print One, Return Another
function printOne(arr) {

  var odd = arr[0];

  if (arr.length == 0) {
    console.log('This array is empty!');
} 
  else if (arr.length == 1) {
    console.log('There is only 1 element in this array');
} 
  else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
      odd = arr[i];
    break;
    }
  }
}
  console.log(arr[arr.length-1]);
return odd;
}
printOne([1,2,3,4,5]);

//Double Vision

function doubleVision(arr) {

 var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
  return newArr;
}
doubleVision([1,2,3]);


//Count Positives

//Evens and Odd
function evensAndOdds(arr) {
  var threeOdds = 0;
  var threeEvens = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      threeOdds++;
    
    if (threeOdds % arr[i]) {
      console.log("That's odd!");
    }
  }
   else {
    console.log('Even so!');
    }
  }
}
evensAndOdds([1,1,1,2,3,2,2,2]);

//Increment the Seconds

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

//Previous Lengths

function previousLengths(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      arr[i] = arr[i].length;
        console.log('string');
    } 
    else {
      console.log('no string');
    }
  }
    console.log(arr);
  return arr;
}
previousLengths([1,"hello", "from", "jordan"]);

//Add Seven to Most

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

//Reverse Array

function reverseArray(arr) {

  for(var i = 0; i < Math.floor(arr.length/2); i++) {
    temp = arr[i];
      arr[i] = arr[arr.length -1-i];
        arr[arr.length-1- i] = temp;
      }
    console.log(arr);
  return arr;
}
reverseArray([1,2,3,4,5,6]);

//Outlook: Negative








