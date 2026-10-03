
let num1 = 50;
let num2 = 30;
let choice = 1;


switch (choice) {
    case 1:
        console.log("Addition" ,num1 + num2);
        break;
    case 2:
        console.log("Multiply",num1 * num2);
        break;
    case 3:
        console.log("Subtraction",num1 - num2);
        break;
    case 4:
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Division",num1 / num2);
        }
        break;
    case 5:
        console.log("Remainder",num1 % num2);
        break;
    default:
        console.log("Invalid choice");
}

