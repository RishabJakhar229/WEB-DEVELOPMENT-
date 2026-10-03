
// let product1 = ["iphone", 78415, 4.6, 78, 10]

// console.log(product1["3"]); // 78
// console.log(typeof product1); // object

// let product2 = {

//     price: 78451,
//     avgRating: 4.6,
//     totalReviews: 78,
//     discount: 20,
//     productName: "iphone 20 pro max",
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }


// product2.product-name // error
// product2["product-name"]


// console.log(product2.discount); // 10
// console.log(product2["product-name"]); // iphone

// let res = product2.printProductName() 
// // console.log(res);
// product2.printDiscount() // 10%

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// for(value of product1){
// console.log(value);
// }

// for(let i =0 ; i<product1.length;i++){
//     console.log(product1[i]);
// }

// product1.forEach(function(value,index){
// console.log(value , index);
// })


// let Math2 = {
//     abs(){

//     },
//     ceil(){

//     },
//     floor(){

//     }
// }




// function b(num) {
//     console.log("b");
//     console.log(num);
//     num()
// }

// b(function a() {
//     console.log("a");
// })


// for (value in product2){
//     console.log(product2[value]);
// }



// // destructuring of array //

// let product1 = [78415, 4.6, 78, 10, "iphone"]
// const [name, price, rating, review, discount] = [ "iphone",78415, 4.6, 78, 10]
// console.log(price);

// destructuring of object //

let product2 = {

    price: 78451,
    avgRating: 4.6,
    totalReviews: 78,
    discount: 20,
    productName: "iphone 20 pro max",
    varients: ["pro", "base", "pro max"],
    manufacturerDetail: {
        city: "jhajjar",
        state: "haryana",
        country: "india",
    },
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.discount);
    }
}

// let {price , printDiscount,avgRating} = product2 // we will do it in react
// console.log(price ,printDiscount(), avgRating);


// for ( [key , value] of Object.entries(product2)){
//     console.log(key , value);
// }


// // spread operator //

// let product1 = [78415, 4.6, 78, 10, "iphone"]
// const [n, p] = [ "iphone",78415, 4.6, 78, 10]

// let arr = [53,78,522,854,63,24]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr)); 

// let a =[4,5]
// let b = [8,9,3,7]

// let c = [...a , ...b] // array merging by spread operator
// console.log(c); // [4,5,8,9,3,7]

// Math.max()


// rest operator //

let product1 = [78415, 4.6, 78, 10, "iphone"]
const [n, p, ...hello] = ["iphone", 78415, 4.6, 78, 10]

// console.log(hello); // [ 4.6, 78, 10 ]


function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value
    }
    return total;

}

console.log(add(4, 5, 844, 754, 964));


let { manufacturerDetail , ...userKeLiyeDetail } = product2  // rest
console.log(userKeLiyeDetail);





















































