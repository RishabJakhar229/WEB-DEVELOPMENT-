
// console.log("Task 1");

// console.log("Task 2");

// // for(let i = 0 ; i<100000000 ; i++){

// // }

// let startTime = Date.now()

// while(Date.now() - startTime <10000){

// }

// console.log("Task 3");

// console.log(globalThis);
// console.log(document);




// console.log("task 1");

// setTimeout(function cb() {
//     console.log("task 2");
//     let startTime = Date.now()

//     while (Date.now() - startTime < 10000) {

//     }
// }, 0)

// console.log("task 3");


// setTimeout(() => {
//     console.log("hii");
// }, 3000)




// console.log("task 1");

// setTimeout(() => {
//     console.log("task 2");
// },4000);

// let startTime = Date.now()
// while(Date.now() - startTime <10000){

// }

// setTimeout(() => {
//     console.log("task 5");
// },1000);

// setTimeout(() => {
//     console.log("task 4");
// },2000);

// console.log("task 3");




// let count = 0

// let id = setInterval(function () {
//     count++;
//     if (count >= 5) {
//         clearInterval(id)
//     }
//     console.log("hii");

// }, 1000)


// MINI PROJECT //

const body = document.querySelector("body")

let colorStr = "01234556789abcdef"



setInterval(() => {

let color = ""
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]
    }
    body.style.backgroundColor = `#${color}`
}, 1000)


