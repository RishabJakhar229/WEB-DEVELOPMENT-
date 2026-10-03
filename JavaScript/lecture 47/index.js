
// async function fun2() {
//     // console.log("hii");
//     return 11
// }


// function fun1() {
//     // console.log("hello");

//     // return Promise.resolve(10)
//     return 10
// }

// // console.log(fun2());
// fun2().then((data) => {
//     console.log(data);
// })
// console.log(fun1());



// console.log("a");

// async function fun3(){
//     console.log("b");
// }

// console.log("c");

// fun3()





// async function fun3() {
//     return "hello"
// }
//  function fun4() {
//     return Promise.resolve("hiii")
// }

// // fun3().then(data =>{
// //     console.log(data);
// // })


// console.log("1");
// async function fun5() {
//     // fun3().then(data => {
//     //     console.log(data);
//     // })

//     // OR 

//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data);
//     console.log(data2);
// }
// console.log("monu");

// fun5()

// console.log("5");




// console.log("a");

// async function random() {
//     console.log("b");

//     await 1;

//     console.log("c");
// }
// random()

// console.log("d");




// let data;

// async function userdata() {
//     return { name: "monu" }
// }

// function fun4() {
//     return Promise.reject("error aa gaya")
// }

// async function fun5() {
//     try {
//         data = await userdata()
//         let data2 = await fun4()
//         console.log(data, data2);
//     } catch (error) {
//         console.log(error);
//     } finally{
//         console.log("mai toh hamesha run karuga");
//     }
// }

// fun5()









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

function addToCart() {
    return new Promise(function (resolve, reject) {
        console.log("pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza added to cart");
            resolve();
        }, 3000);
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);

        setTimeout(function fun3() {

            let isPaymentSuccessful = true;

            if (isPaymentSuccessful) {
                console.log(`Payment Completed , Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000);
    })
}


// let res = searchPizza()

// res.then(function (price) {
//     console.log(price);
//     return addToCart(price)
// }).then(function (price) {
//     return payment(price)
// }).then(function () {
//     console.log("pizza is on the way");
// }).catch(function (err) {
//     console.log(err);
// })

// OR //    try and catch wala chota and easy syntax hai

async function orderFood() {
    try {

        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("bass aa hi gaya pizza");

    } catch (error) {
        console.log(error);
    }
}

orderFood()

