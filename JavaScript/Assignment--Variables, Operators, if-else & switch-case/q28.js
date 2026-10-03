let balance = 345;
let withdrawAmount = 100;
let deposit = 300;
let choice = 3;

switch (choice) {
    case 1:
        console.log("Current Balance :", balance);
        break;
    case 2:
        if (deposit > 0) {
            balance += deposit
            console.log("Money Deposited Successfully");
            console.log("New Balance", balance);
        } else {
            console.log("invalid deposit amount");
        }
        break;
    case 3:
        if (withdrawAmount <= 0) {
            console.log("Invalid WithdrawAmount");
        } else if (withdrawAmount > balance) {
            console.log("Insufficient Balance");
        } else {
            let remaining = balance - withdrawAmount;
            console.log("Withdraw Successfull");
            console.log("Remaining Amount", remaining);
        }
        break;
    case 4:
        console.log("Thanks For Using The ATM");
        break;
    default :
    console.log("Invalid choice");
}



