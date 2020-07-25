/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 29

if(votingAge > 18){
    console.log("votingAge", true)
} else {
    console.log("votingAge", false)
} // Should print true



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let variableA = 15
let variaableB = 21

if(variaableB >= 21){
    variableA += 17
} else {
    variableA -= 10
}

console.log("varA vs varB", variableA) // should print 32

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let string = "1999"

console.log("String to Number", Number(string)) // should print 1999



//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a*b
}

console.log("multiply a*b", multiply(10, 3)) // should print 30


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return age * 7
}

console.log("dogyears", dogYears(31)) // should print 217

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
  
function dogFeeder(weight, age){
    if (age >= 1){
        if (weight <= 5){
            return weight * .05
        } else if (weight > 5 && weight < 11) {
            return weight * .04
        } else if (weight > 11 && weight < 16) {
            return weight * .03
        } else if (weight > 15) {
            return weight * .02
        }
    } else if (age < 1) {
        if (age > (2/12) && age < (4/12)){
            return weight * 0.1
        } else if (age >= (4/12) && age < (7/12)) {
            return weight *.05
        } else if (age >= (7/12) && age < 1){
            return weight * .04
        }
    }
}

console.log("DogFeeder", dogFeeder(15, 1)) // should print 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors(playerChoice){
    return
}  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(km){
    return km * 0.621371
}

console.log("kmtomilees", kmToMiles(10)) // should print 6.21371


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(ft){
    return ft * 30.48
}

console.log("feettoCm", feetToCm(10)) // should print 304.8

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(starting_num){
    bottles = starting_num
    for (let i = 0; i < starting_num; i++){
        console.log(`${bottles}bottles of soda on the wall, ${bottles} bottles of soda, take one down pass it around ${bottles - 1} bottles of soda on the wall`)
        bottles -= 1
    }
}
console.log(annoyingSong(10)) // should print -- 
// 10bottles of soda on the wall, 10 bottles of soda, take one down pass it around 9 bottles of soda on the wall
// 9bottles of soda on the wall, 9 bottles of soda, take one down pass it around 8 bottles of soda on the wall
// 8bottles of soda on the wall, 8 bottles of soda, take one down pass it around 7 bottles of soda on the wall
// 7bottles of soda on the wall, 7 bottles of soda, take one down pass it around 6 bottles of soda on the wall
// 6bottles of soda on the wall, 6 bottles of soda, take one down pass it around 5 bottles of soda on the wall
// 5bottles of soda on the wall, 5 bottles of soda, take one down pass it around 4 bottles of soda on the wall
// 4bottles of soda on the wall, 4 bottles of soda, take one down pass it around 3 bottles of soda on the wall
// 3bottles of soda on the wall, 3 bottles of soda, take one down pass it around 2 bottles of soda on the wall
// 2bottles of soda on the wall, 2 bottles of soda, take one down pass it around 1 bottles of soda on the wall
// 1bottles of soda on the wall, 1 bottles of soda, take one down pass it around 0 bottles of soda on the wall

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(input){
    if (input > 89){
        return "A"
    } else if (input > 79){
        return "B"
    } else if (input > 69) {
        return "C"
    } else if (input > 59) {
        return "D"
    } else {
        return "F"
    }
}
  
console.log('gradeCalculator', gradeCalculator(88)) // should print B

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

vowels = ["a", "e", "i", "o", "u"]

function vowelCount(string){
    count = 0
    newString = string.toLowerCase()
    for(let i=0; i < newString.length; i++){
        if (vowels.includes(newString.charAt(i))){
            count += 1
        }
    }
    return count
}

console.log(vowelCount("Hello World")) // should print 3



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
