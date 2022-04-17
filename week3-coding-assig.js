
// question 1 

var ages=[ 3,9,23,64,2,8,28,93];  // the array ages is created 
var lastItem = ages[ages.length - 1];
console.log(lastItem);
console.log(lastItem - ages[0]);

ages.push(100); // push() method adds new item to the array 
console.log(ages); // added a new age to the array. the added age is 100 
var lastItem = ages[ages.length - 1]; // last item in the array. it will overrides the first determined last number. on line 15
console.log(lastItem);  
console.log(lastItem - ages[0]); // this prints out the new subrastraction of the first element in the array from value of the last element in the array 
//the result is 97 


//average of the array 

var sum = 0;       // creating a variable and set it to zero as the starting point in for loop
for(var i = 0; i < ages.length; i++) {  // loop through the array and add all elements of the loop together 
    sum += ages[i];
}
var average = sum / ages.length; // create the variable to hold the output. In this case  I created the variable average

console.log(average); // print out the average 

//question 2

var names = ['Sam','Tommy','Tim', 'Sally','Buck','Bob']; //defining the name array 


/*const totalNamesLength = names.reduce(function (total, names){ // use the array method reduce() to sum up the total lenght of all names in names array 
   return total + names.length; }
, 0);

const avgOfNamesLength = (  
    totalNamesLength / names.length  // after gettin the sum of all names's characters, we divide that total number with the lenght of the names array 
);
console.log(avgOfNamesLength); // print out the average of characters per name within the names array 
*/


var total = 0;
//use for loop to go through the array and add all characters of each single string together. 
for( var i= 0; i<names.length; i++ ){ 
    total += names[i].length;
}

//create a variable and assign it to the total of all characters divide by the lenght or the size of the names array. 
// to obtain an average of number of character per string in array
var avgOfNamesLength = total / names.length; 
console.log(avgOfNamesLength); 


// question 2.b
var concatenateNames= names. join(" "); // join method will turn concatenate the array elements into a string. The " " will introduce the space between the items. 
console.log(concatenateNames);

//question 3 : How do you access the last element of any array?
// by using array.lenght - 1. Here is an example: 
var ages=[ 3,9,23,64,2,8,28,93];  
var lastItem = ages[ages.length - 1]
console.log(lastItem);



// question 4: How do you access the first element of any array?
// by using its index. the first item in js has an index of zero 
//here is an example. 
var ages=[ 3,9,23,64,2,8,28,93];  
console.log(ages[0]);

// Create a new array called nameLengths. 
for(i=0; i<names.length; i++){
    nameLenghts = names.map(name => name.length);
}
console.log(nameLenghts);


//question 6: sum all items in namesLenghts array 

sumUp=0; // sumUp variable will store the total 

for( var i=0; i< nameLenghts.length; i++){  //running the for loop 
    sumUp += nameLenghts[i];
}

console.log(sumUp);


//question 7:


//create repeatWordNumOfn that takes two arguments
function repeatWordNumOfn(word,n){
    var repeatedWord=" " //empty string that will store repeated word
    while (n>0){ // as long as n is greater than 0, the statemt in while loop will be executed
       //statements
        repeatedWord+= word; 
        n--;
    }
    return repeatedWord;   
};
console.log(repeatWordNumOfn("hello", 3));


// my note: I can also use if--else


function repeatWordNumOfn(word, n) {
    if (n > 0)  // if n is a positive number, it will return  word concatenated to itself n number of times
      return word.repeat(n);

    else
      return " n negative ";
  }
  console.log(repeatWordNumOfn("World", 3));


  //question 8
  // concat() will join two strings together and " " will introduce a space between the two

  function myFullName( firstName,lastName){
      return firstName.concat(" ",lastName);
  }

  console.log(myFullName('Gloria','Dukuzeyesu')); 


  //question 9
  
  function numbers1(arrayOfNumbers){
      var arrayOfNumbers=[10,20,30,90];
      var accumulator= arrayOfNumbers.reduce((total, amount) => total + amount);
 if (accumulator>100){
     return true; // if the sum of all items in the array is greater than 100, the output will always be true. If the sum is less than 100, the out put will be false
 } else{
     return false;
 }
  }
  console.log(numbers1()); 


//question 10 

function myFunction2(grades){
    var grades=[50,10,30];
    var myTotal = grades.reduce((total, amount) => total + amount); 
  return myTotal / grades.length;

}
console.log( myFunction2());


// question 11

function groupOfArrays(array1, array2){

    var totalOfArray1= array1.reduce((total, amount) => total + amount); 
    var totalOfArray2= array2.reduce((total, amount) => total + amount); 

    var averageOfArr1= totalOfArray1 / array1.length;
    var averageOfArr2 = totalOfArray2 / array2.length;

 if ( averageOfArr1 > averageOfArr2 ){
     return true;
 } else{
     return false;
 }

} 
console.log(groupOfArrays([20,25,30,35],[1,2,3] ));


// question 12 

function willBuyDrink( isHotOutside, moneyInPocket){

    var isHotOutside = true; // isisHotOutside is boolean 
    var moneyInPocket = 20; // moneyInPocket is a number 

    if ( isHotOutside && moneyInPocket> 10.50){
        return true;
    } else{
        return false;
    }
} 
console.log(willBuyDrink());



//question 13


function rangeOfGrade (annualGrades){ // function rangeOfGrade will give the range between the large grades and lowest grades

var arrangedGrades = annualGrades.sort(); // sort() will sort all numbers and arrage them from lowest to largest number 
var LowestGrade= arrangedGrades[0];
var LargestGrade= arrangedGrades[ arrangedGrades.length-1];

return LargestGrade-LowestGrade;

}

console.log (rangeOfGrade([45,80,25,74,56,73,90,23,18,83]));





