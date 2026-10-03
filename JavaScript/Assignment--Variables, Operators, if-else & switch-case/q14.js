let math = 100;
let english = 56;
let hindi = 87;

let totalMarks = math + english + hindi;


if (math < 40 || hindi < 40 || english < 40) {
    console.log("Result : FAIL");
} else {
    let average = totalMarks / 3;

    if (average >= 75) {
        console.log("Distinction");
    } else if (average >= 60) {
        console.log("First Division");
    } else if (average >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}

