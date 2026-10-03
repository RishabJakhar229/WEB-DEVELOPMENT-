let student = {
    name: "monu",
    rollNo: 20,
    subject: ["math", "english", "hindi"],

}


// how to rename key //

let { subject: yukki, totalMarks = 500, ...hello } = student
// subjects --> yukki
// let yukki = subject // not good practice
// console.log(totalMarks);
// console.log(yukki);


// object merging // 

let obj1 = {
    name: "monu",
    phone: 95874141158,
}

let obj2 = {
    address: "india",
    aadharCrd: 98552442511,
    name: "yukki"
}

let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


// array and object update //

const arr = [1, 2, 3, 4]
arr[1] = "updated"

// console.log(arr);


const obj = {
    name: "jayant",
    rollNo: 34,
    address: null
}
obj["name"] = "mayank"
obj.name = "kartik"

delete obj.rollNo // property deleted  --> this id for object

// console.log(obj);

// console.log(obj.address?.street);

// splice //

let arr1 = [1, 2, 3, 4, 5, 6]

// // arr1.splice(1,3) // delete
// arr1.splice(3, 0, "hello")  // add
// arr1.splice(3, 2, ["replace"])  // replace
// console.log(arr1);

// slice //

// let trimArr = arr1.slice(1 , 4)

// console.log(trimArr);


// console.log(arr1.indexOf(2332)); // if present it will return index else -1

let result = arr1.find((value) => {
    if (value === 5) {
        return value
    }
})
// console.log(result);

let resIndex = arr1.findIndex((value) => {
    return value === 5;
})
// console.log(resIndex);


// flat //

 let arr3 = [1,2,3,4,5,6,[7,8,9 , [10,11 ,12]]]


// console.log(arr3.flat(Infinity));


// mutability //

let arr4 = [7,52,42,15,9,63,45]

let arrcopy = arr4;
let arrcopy2 = [...arr4]; // spread operator

arrcopy2.pop()

console.log("arr4" , arr4);
console.log("arrcopy" , arrcopy2);





















