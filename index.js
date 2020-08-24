/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 38;

if(votingAge > 18) {
  console.log(true);
} else {
  console.log(false);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let store = 'Belk';
let price = '$10';

if(store === 'TJ Maxx') {
  price = '$10';
} 
if(store === 'Belk'){
  price = '$20';
}
console.log(price);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


 console.log(parseInt('1999'))


//Task d: Write a function to multiply a*b 

function multiply(a, b){
  return a * b;
};

console.log(multiply(4,7));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myDogAge = function(age){
  return age * 7;
}

console.log(myDogAge(20));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weightInPounds, ageInYears){
  if(ageInYears >= 1) {
    if (weightInPounds <= 5){
      return weightInPounds * .05;
    } else if (6 <= weightInPounds && weightInPounds <= 10){
      return weightInPounds * .04;
    } else if (11 <= weightInPounds && weightInPounds <= 15){
      return weightInPounds * .03;
    } else if (weightInPounds < 15){
      return weightInPounds * .02;
    }
  } else if (ageInYears < 1) {
    if (.166 <= ageInYears <= .333){
      return weightInPounds * .1;
    } else if (.333 <= ageInYears <= .583){
      return weightInPounds * .05;
    } else if (.583 <= ageInYears <= .999){
      return weightInPounds * .04;
    }
  } else {
    return "Not a valid input.";
  }
}
console.log(dogFeeder(15, 1));






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  // let response = "Rock";
  // let throw = "Rock";
  // let ai = Math.random();
  //   if (ai > .33) {
  //     response = "Rock";
  //   } else if (ai > .66) {
  //     response = "Paper";
  //   } else {
  //     response = "Scissors";
  //   }
  //   // console.log(response);
    
  // let roshambo = function(throw) {
  //   if (throw === response){
  //     return "It is a tie!";
  //   } else if (throw === "Rock" && response === "Paper"){
  //     return "You lost!";
  //   } else if (throw === "Rock" && response === "Scissors"){
  //     return "You win!";
  //   } else if (throw === "Paper" && response === "Scissors"){
  //     return "You lost!";
  //   } else if (throw === "Paper" && response === "Rock"){
  //     return "You win!";
  //   } else if (throw === "Scissors" && response === "Paper"){
  //     return "You win!";
  //   } else if (throw === "Scissors" && response === "Rock"){
  //     return "You lost!"
  //   }
  // }
  //   console.log(roshambo("Rock"))
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kmConverter = function(kilometers){
  return kilometers / .621;
}
console.log(kmConverter(1) + " miles");


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let centiMeters = function(feet){
  return feet * 30.48;
}
console.log(centiMeters(1) + " cm");
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(bottles){
  for (let i = bottles; i > 0; i-- ){
    return i + " bottles of soda on the wall, " + i + " bottles of soda." + " Take one down pass it around, " + (100 - i) + " bottles of soda on the wall.";
  }
}
console.log(annoyingSong(40));


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

  let letterGrade = 'A';
  let numberGrade = 79;

 if (90 <= numberGrade && numberGrade <= 100){
   letterGrade = 'A';
} if (80 <= numberGrade && numberGrade <= 89){
   letterGrade = 'B';
 } if (70 <= numberGrade && numberGrade <= 79){
    letterGrade = 'C';
 } if (60 <= numberGrade && numberGrade <= 69){
    letterGrade = 'D';
 } if (numberGrade < 60){
    letterGrade = 'F';
 }
  console.log(letterGrade);
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





