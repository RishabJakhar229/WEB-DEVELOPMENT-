
// console.log("a");

// const p = new Promise(function (resolve, reject) {

//     resolve("hiii")
//     // reject("server down hai")

// })

// console.log("c");
// console.log(typeof p); // object

// p.then(function onFulfilled(val) {
//     console.log(val);
// }, function onRejected(val) {
//     console.log(val);
// })


// const res = p.then(function (val) {
//     console.log(val);
// }, function (val) {
//     console.log(val);
// })
//     .then(() => { }, () => { })
//     .then()
//     .then()


// const res = p.then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).catch(function (val) {
//     console.log(val);
// }).finally(function(){
//     console.log("ye toh hamesha chale ga");
// })



// console.log("a");

// const p2 = new Promise(function f1(resolve, reject) {
//     console.log("b");
//     resolve("hello")
// })

// p2.then(function f2(val) {
//     console.log("then");
//     console.log(val);
// }).catch(function f3() {
//     console.log("catch");
// }).finally(function f4() {
//     console.log("finally");
// })

// console.log("c");



// const p3 = new Promise(function f1(resolve, reject) {
//     resolve() // ye line sirf or srif itna btati hai ki promise fulfill ho gaya thats it
//     // reject()
// })


// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// }).catch(function (err) {
//     console.log(err);
// })

// setTimeout(function fun3() {
//     console.log("set timeout");
// }, 2000)

// p3.then(function f3() {
//     console.log("f3 function");
// })







function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza Searching..");
        setTimeout(function fun1() {
            console.log("here is the pizza menu...");
            let price = 500;
            // a(price);
            resolve(price)
        }, 2000);
    })
}

function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza added to cart");
            resolve(price);
        }, 3000);
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);

        setTimeout(function fun3() {

            let isPaymentSuccessful = false;

            if (isPaymentSuccessful) {
                console.log(`Payment Completed , Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000);
    })
}

// searchPizza().then(function (price){
//     console.log(price);
// })

let res = searchPizza()

res.then(function (price) {
    console.log(price);
    return addToCart(price)
}).then(function (price) {
    return payment(price)
}).then(function () {
    console.log("pizza is on the way");
}).catch(function (err) {
    console.log(err);
})

