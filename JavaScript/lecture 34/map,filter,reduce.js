
let originalPrices = [751, 851, 635]

let discountedPrices = []

// for (value of originalPrices) {

//     // let discount = value * 10 / 100
//     // discountedPrices.push(value - discount) // 10% discount

//     discountedPrices.push(value * 0.9) // 10% discount
// }

originalPrices.forEach((value) => {
    discountedPrices.push(value * 0.9) // 10% dicount
})

// console.log(originalPrices);
// console.log(discountedPrices);


// MAP //


const discountedPrice2 = originalPrices.map((value) => value * 0.9)
// console.log(discountedPrice2);

let students = [
    {
        name: " monu",
        marks: 42,
    },
    {
        name: " jynt",
        marks: 45,
    },
    {
        name: " mynk",
        marks: 62,
    },
    {
        name: " kartik",
        marks: 59,
    }
]

// let studentsName =[]

// students.forEach((value) => {
//     studentsName.push(value.name)
// })

const studentName = students.map((students) => {
    return students.name
})
const studentMarks = students.map((students) => students.marks)

// console.log(studentName , studentMarks);

// let boostedMarks = students.map((student) => {
//     return {...student , marks : student.marks + 10}
// })
let boostedMarks = students.map(student => ({ ...student, marks: student.marks + 10 }))
let boostedMarks2 = students.map(student => students.marks < 33) // [ false, false, false, false ]

// console.log(boostedMarks);
// console.log(boostedMarks2);


//FILTER //

// let failedStudents = []

// students.forEach((students) => {
//    if(students.marks < 50){
//     failedStudents.push(students)
//    }
// })

const failedStudents = students.filter((students) => students.marks < 50).map((students) => students.name)

// filter use krke agar humko names hi dekhne hai marks nhi //
// const failedStudentsName = failedStudents.map((students) => students.name)
// console.log(failedStudents);


// REDUCE //

let marks = [75, 85, 64, 85, 25, 35]

// let totalMarks = 0

// marks.forEach((mark) => totalMarks = totalMarks + mark)

// const totalMarks1 = marks.reduce((accumulator, currentValue) => {
//     accumulator = accumulator + currentValue
//     return accumulator;
// }, 0)

const totalMarks = students.reduce((totalMarks, students) => totalMarks + students.marks, 0)

console.log(totalMarks);
// console.log(totalMarks1);



const attendence = ["present", "present", "absent", "present", "absent"]

// output --> {present : 3 , absent : 2}

// let obj = {}

// attendence.forEach((value) => {
// if(obj[value]){
//     obj[value] = obj[value] + 1
// } else {
//     obj[value] = 1
// }
// })
// console.log(obj);


// BY REDUCE //

const obj = attendence.reduce((acc, value) => {
    // if (acc[value]) {
    //     acc[value] = acc[value] + 1
    // } else {
    //     acc[value] = 1
    // }

acc[value] = (acc[value] || 0) +1 ;

    return acc
}, {})

console.log(obj);
