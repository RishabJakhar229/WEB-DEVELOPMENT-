
let user1 = {
    name: "rishab",
    age: 20,
    printName() {
        console.log(`hii , I am ${this.name}`);
    }
}

let user2 = {
    name: "mayank",
    age: 22,
    printName() {
        console.log(`hii , I am ${this.name}`);
    }
}

let user3 = {
    name: "jayant",
    age: 25,
    printName() {
        console.log(`hii , I am ${this.name}`);
    }
}

function printName(country, state) {
    console.log(`hii , I am ${this.name} , from ${country} , ${state}`);
}


// user1.printName()

// user1.printName.call(user2)
// user1.printName.call(user3)

// printName.call(user1 , "india")
// printName.call(user2 , "sri lanka")
// printName.call(user3 , "china")

// printName.apply(user1, ["india", "delhi"])
// printName.apply(user2, ["sri lanka", "colombia"])
// printName.apply(user3, ["australia", "melbourne"])

const newFun = printName.bind(user1 , "india" , "delhi")
console.log(newFun);

newFun()