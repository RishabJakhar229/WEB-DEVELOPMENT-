let price = 1000;
let quantity = 10;

let originalBill = price * quantity;
let discount = originalBill * 10/100;
let finalBill = originalBill - discount

console.log("originalBill" , originalBill);
console.log("discount" , discount);
console.log("finalBill" , finalBill);