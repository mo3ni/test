/* First Home Work in Javaschript
Age-ify (A future age calculator) */
var yearOfBirth;
var yearOfFuture;
var age;
yearOfBirth = 1994;
yearOfFuture = 2027;
age = yearOfFuture - yearOfBirth;
console.log( "You will be ",age," years old in 2027");

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth =2017;
const dogYearOfFuture =2027;
const dogYear = dogYearOfFuture - dogYearOfBirth;
const shouldShowResultInDogYear = [true, false];
if (shouldShowResultInDogYear) {
    console.log ("Your dog will be ",dogAge,"dog years old in",dogYearOfFuture);
}
else {
    console.log ("Your dog will be ",(dogYear *7),"human years old in",dogYearOfFuture);
}

/*Housey pricey ( A house price estimator)
var housePrice;
var volumeInMeters
var gardenSizeInM2;

*/
// Housey pricey (A house price estimator)
const wide,deep,high;
const persons;
const gardenSizeInM2,pricePaid;
wide = [8, 5];
deep = [10, 11];
high = [10, 8];
pricePaid = [2500000, 1000000];
gardenSizeInM2 =[100, 70];
persons = ["Peter","Julia"];
var volumeInMeters =0;
var housePrice = 0;
// for(init; condition; iteration){ code}
for (var i =0 ; i<2 ; i++){
    volumeInMeters = wide[i] * deep[i] * high[i];
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2[i] * 300;

if(housePrice >= pricePaid[i]){
    console.log (persons[i],"s house is in a fair price!");
}
else   {
    console.log( persons[i],"s paid too much for this house!!");
}
}

//Ez Namey (Starup name generator)
var firstWords = ["good","Super","Awesome","Cool","Effortless","Corporate","powerfull","impactful","Provement","charismatic"];
var secondWords= ["Organiztion","Academy","Org","agency","corporation","company","fellowship","scheme","Institute","operation"];
const randomNumber = [Math.floor(Math.random()*firstWords.length),
                      MAth.floor(Math.random()*secondWords.length)];
let newStaruptName = firstWords[randomNumber[0]] + " "+ secondWords[randomNumber[1]];
console.log ("New random startup name is ", newStaruptName, " and have", newStaruptName.length,"character");

