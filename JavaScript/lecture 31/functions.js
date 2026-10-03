
// let jyntMarks = 40 + 57 + 37;
// let mynktMarks = 30 + 47 + 67;
// let monuMarks = 54 + 29 + 35;
// let kartikMarks = 39 + 36 + 44;

// console.log("jyntMarks" , jyntMarks);

// let productPrice = 3000;
// let discountAmount = 3000 * 10/100;
// let deliveryCharge = 50;
// let totalAmount = productPrice -discountAmount + deliveryCharge

// function syntax


// totalMarks("jynt",40 , 57 , 37)
// totalMarks("mynk",30 , 47 , 67)
// totalMarks("monu", 54 , 29 , 35)
// totalMarks("kartik", 39 , 36 , 44)

// function totalMarks(studentName , mathMarks , scienceMarks , hindiMarks){
//   console.log(`${studentName} total marks :` , mathMarks + scienceMarks + hindiMarks);
// }




// function greetingMsg(userName = "Guest" , greetings = "Hiii"){
//     console.log(`${greetings}, ${userName}`);

// }

// greetingMsg(" monu" , "Hii")
// greetingMsg(" jynt" , )
// greetingMsg(" mynk" , "Namaste" )
// greetingMsg()



// function calculator(num1, num2, operator) {

//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//     }
// }

// calculator(4 , 5 , "-")


function totalMarks(mathMarks, scienceMarks, hindiMarks) {
    //   console.log( mathMarks + scienceMarks + hindiMarks);
    return mathMarks + scienceMarks + hindiMarks
}

function calPercentage(studentName, mathMarks, scienceMarks, hindiMarks) {
    let total = totalMarks(mathMarks, scienceMarks, hindiMarks);
    let percentage = (total / 300) * 100
    console.log(`${studentName} percentage : `, percentage);
    return percentage
}

// let normalVariable = calPercentage("jynt", 40, 57, 37)
// console.log(normalVariable);


// totalMarks("jynt", 40, 57, 37)
// totalMarks("mynk", 30, 47, 67)
// totalMarks("monu", 54, 29, 35)
// totalMarks("kartik", 39, 36, 44)

// after array class //
let students = [["jynt", 40, 57, 37], ["mynk", 30, 47, 67], ["monu", 54, 29, 35], ["kartik", 39, 36, 44]]

for (let i = 0 ; i < students.length ; i++){
    calPercentage(students[i][0] , students[i][1] , students[i][2] , students[i][3])
}




// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// console.log( add(4 , 6));
// let add = function (num1 , num2) {
//     return num1 + num2
// }


// // arrow function

// // syntax 1
// let add1 = num1 => num1 + 4;

// // syntax 2
// let add2 = (num1 , num2) => num1 + num2;

// // syntax 3
// let add3 = (num1 , num2) => {
//     // something
//     //something
//     return num1 + num2
// };



