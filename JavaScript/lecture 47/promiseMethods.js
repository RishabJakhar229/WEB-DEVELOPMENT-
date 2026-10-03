
function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun1")
        }, 3000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun2")
        }, 1000)
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun3")
        }, 5000)
    })
}

// let result = Promise.all([fun1(),fun2(),fun3()])
// OUTPUT  //
//  [ 'fun1', 'fun2', 'fun3' ] //

// let result = Promise.allSettled([fun1(),fun2(),fun3()])
// OUTPUT  //
// [                                           //  
//    { status: 'fulfilled', value: 'fun1' },  //
//    { status: 'fulfilled', value: 'fun2' },  // 
//    { status: 'fulfilled', value: 'fun3' }   //
// ]                                           //

// let result = Promise.race([fun1(),fun2(),fun3()])  // isko farak nhi padta fulfill or rejected se jo phale finish hua vo output hai
//  OUTPUT  //
// fun2 //

// let result = Promise.any([fun1(), fun2(), fun3()])    //  isko sabse phele jo fulfill mil gaya vo output 
//  OUTPUT  //
// fun2 //


result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})