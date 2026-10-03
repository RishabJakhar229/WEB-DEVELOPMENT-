
// function fun1(callback) {
//     console.log("hii");
//     callback()
// }

// function cb() {
//     console.log("this is callback function");
// }

// fun1(cb)


// let arr = ["a", "b", "c", "d"]


// function a() {
//     function b() {

//     }
//     return b
// }







function searchPizza(cb1) {
    console.log("Pizza Searching..");
    setTimeout(function fun1() {
        console.log("here is the pizza menu...");
        let price = 500;
        cb1(price);
    }, 2000);
}

function addToCart(cb2) {
    console.log("pizza adding to cart...");
    setTimeout(function fun2() {
        console.log("Pizza added to cart");
        cb2();
    }, 3000);
}

function payment(price, cb3) {
    console.log(`Payment Initiated , Amount : ${price}`);
    setTimeout(function fun3() {
        console.log(`Payment Completed , Amount : ${price}`);
        console.log("pizza is on the way");
    }, 5000);
}

searchPizza(function a(price) {
    addToCart(function b() {
        payment()
    });
});

















