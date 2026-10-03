
// Arithmetic operators

// let num1 = 2;
// let num2 = 4;


// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);


// case sensitive
// teeno variable different hai

// let NAME = "rishab"
// let name = "jynt"
// let Name = "mayank"


// let num = 45;
// num++;
// console.log(++num);  // 46 --> pre increment
// console.log(num++);  // 46
// console.log(num);    // 47


// console.log(--num);  // 44  --> pre decrement
// console.log(num--);  // 44
// console.log(num);    // 43

// assignment operator

// let num = 2;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **=5;
// console.log(num);


// comparison operator --> always return boolean (True or False)

// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6);
// console.log(3 < 6);
// console.log(3 >= 6);
// console.log(3 <= 6);
// console.log(3 == 6);
// console.log(3 != 6);


// loose equality
// console.log("5" == 5);

// strict equality
// console.log("5" === 5);


// logical operator

// console.log(true && false); // and
// console.log(true || false); // or

// const age = 17;
// const hasId = true;

// const canEnterClub = age >= 18 && hasId === true;
// console.log(canEnterClub);

// console.log(!34343);




// const isLoggedIn = true

// if (isLoggedIn) {
// console.log("you can like,comment");

// } else {
// console.log("please first login");

// }


// let temp = 40

// if(temp >= 25) {
//     console.log("on the ac");
// } else {
//     console.log("don't on ac");
// }


// let day = "monday";

// if (day === "monday") {
//     console.log("1st day of week");

// } else if (day === "tuesday") {
//     console.log("2nd day of week");

// } else if (day === "wednesday") {
//     console.log("3rd day of week");

// } else if (day === "thursday") {
//     console.log("4th day of week");

// } else if (day === "friday") {
//     console.log("5th day of week");

// } else if (day === "saturday") {
//     console.log("6th day of week");

// } else if (day === "sunday") {
//     console.log("7th day of week");

// } else {
//     console.log("wrong day");

// }


// nested if else jio hotstar

// const isLoggedIn = true;
// const isSubscribed = false;

// if (isLoggedIn) {
//     if (isSubscribed) {
//         console.log("you can access premium content");

//     } else {
//         console.log("you can not access premium content");

//     }
// } else {
//     console.log("Please login");

// }


// switch case

const day = "friday"

switch (day) {
    case "monday":
        console.log("1st day of week");
        break;
    case "tuesday":
        console.log("2nd day of week");
    case "wednesday":
        console.log("3rd day of week");
        break;
    case "thursday":
        console.log("4th day of week");
        break;
    case "friday":
        console.log("5th day of week");
        break;
    case "saturday":
        console.log("6th day of week");
        break;
    case "sunday":
        console.log("7th day of week");
        break;
    default:
        console.log("wrong day");

}

