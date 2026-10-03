let balance = 345;
let withdrawAmount = 100;

if (withdrawAmount <= 0) {
    console.log("Invalid WithdrawAmount");
} else if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
} else {
    let remaining = balance - withdrawAmount;
    console.log("Withdraw Successfull");
    console.log("Remaining Amount", remaining);
}

