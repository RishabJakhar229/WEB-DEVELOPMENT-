
// // HOISTING //

// console.log(a);
// // let a = 6;
// // const a = 34;
// var a = 54;


// addNum()
// function addNum() {
//     console.log("hello");
// }

// console.log(addTwoNum);

// var addTwoNum = function(){
//     console.log("function expression");
// }


// var a = 5;
// let b = 7

// function addNum(){
//     let a = 6;
//     console.log(a);
// }

// addNum()


// var x = 6;

// function random(){
//     console.log(x);
//     let x = 3
// }

// random()


// let city = "delhi"

// function printCity() {
//     console.log(city);
// }

// function random(fn) {
//     let city = "mumbai"
//     function printCity() {
//         console.log(city);
//     }
//     return printCity
// }

// let printCity = random();
// printCity()

// random(printCity)


function outter() {

    let username = "monu"
    function inner() {
        console.log(username);
    }



    return inner
}

const inner = outter()

let username = "mynk"

inner()


function fun1() {
    let username = "monujaat"
    function fun2() {

        function fun3() {

            function fun4() {
                console.log(username);
            }
            fun4()
        }
        fun3()
    }

    fun2()
}
fun1()




