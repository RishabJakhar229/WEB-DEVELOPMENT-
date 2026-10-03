

// function convertToPositiveNumber(num){
//     return num * -1 ;
// }

// let positiveNum = convertToPositiveNumber(-10)

// console.log(positiveNum);


//// math ////


// // absolute : if number is negative then return it positive //
// let positiveNum2 = Math.abs(-10)
// console.log(positiveNum2);

//  // pi value //
// console.log(Math.PI); //3.141592653589793

// //  power  //
// console.log(Math.pow(5 , 2)); // 254

// // square root //
// console.log(Math.sqrt(25));  // 5

// //  minumum number //
// console.log(Math.min(98,45,32,12,7,18,45,75,10));  // 7

// //  maxmium number //
// console.log(Math.max(85,12,2,50,84,78,63));  // 85

// // round off value to nearest integer //
// console.log(Math.round(97.7)); // 98
// console.log(Math.round(97.5)); // 98
// console.log(Math.round(97.3)); // 97
// console.log(Math.round(5.56481)); // 6

// // ceil and floor //
// console.log(Math.ceil (3.4)); // 4
// console.log(Math.floor(6.8)); // 6

// // random : kuch bhi value dega //
// console.log(Math.random() + 1 );

// let result = Math.floor(Math.random() + 1)
// console.log(result); // always give output : 1


// // ludo example //
// let max = 6
// let min = 1
// let result1 = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(result1);


//// number ////

// // isfinite :return in true and false //
// console.log(Number.isFinite(Infinity)); // false

// // parseint : convert number in string to number //
// console.log(Number.parseInt("56")); // 56


// let num1 = "45"; // backend se aai hai
// let num2 = "65"; // backend se aai hai
// console.log(num1 + num2); // 2 string ko add kar rahe ho   // 4565
// console.log(Number.parseInt(num1) + Number.parseInt(num2)); // 110

// // toFixed : if you pass 2 in it , it will write upto 2 decimal and if you will not paas anything than it will write in integer //
// let num = 451.5414541
// console.log(num.toFixed(2)); // 451.54

// // toprecision //
// let num3 = 854.85445566
// console.log(num3.toPrecision(4)); // 854.9


//// string ////


// // toUpperCase : write all letter of string in uppercase //
// console.log("monu".toUpperCase()); // MONU

// // toLoweCase : write all letter of string in lower case //
// console.log("RISHAB".toLowerCase()); //  rishab

// // include : tells that ki vo cheej hai ki nhi hai paragraph me   , output in true and false only //
// let str = "Hello Dosto"
// console.log(str.includes("Dosto")); // true

// let email = "monujaat2227@gmail.com"
// console.log(email.includes("@") && email.includes(".")); // true


// // endsWith //
// let fileName = "image.png"
// console.log(fileName.endsWith(".png") || fileName.endsWith(".jpg"));


// // replace //
// let greet = "hello dosto , hello bachoo"
// console.log(greet.replace("hello", "hiii")); // hiii dosto , hello bachoo
// console.log(greet.replaceAll("hello", "hiii")); // hiii dosto , hiii bachoo

// Date //

console.log(Date.now()); // it gives exact time when you run it and it is started from 1 january , 1970   // unix timestamp //

let date = new Date();

console.log(date.getDay()); 
console.log(date.getMonth());
console.log(date.getFullYear());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toDateString());