let student = "Monu"
let rollNumber = 20;
let mathMarks = 78;
let scienceMarks = 98;
let englishMarks = 87;

let totalMarks = mathMarks + englishMarks + scienceMarks
let percentage = (totalMarks / 300) * 100
let grade ;
let result = "Pass"

if (percentage < 0 || percentage > 100) {
    console.log("invalid percentage");
} else if (percentage >= 90) {
  grade = "A"
} else if (percentage >= 80 && percentage < 90) {
  grade = "B"
} else if (percentage >= 70 && percentage < 80) {
grade = "C"
} else if (percentage >= 60 && percentage < 70) {
grade = "D"
} else if (percentage >= 40 && percentage < 60) {
grade = "E"
} else {
grade = "F"
}
if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) {
 result = "Fail"
}

    console.log("Name" , student);
    console.log("Roll Number" , rollNumber);
    console.log("Maths Marks" , mathMarks);
    console.log("English Marks" , englishMarks);
    console.log("Science Marks" , scienceMarks);
    console.log("Total Marks" , totalMarks);
    console.log("Percentage" , percentage);
    console.log("Grade " , grade);
    console.log("Result :" ,result);

