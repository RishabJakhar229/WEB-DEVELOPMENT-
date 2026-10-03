let percentage = 50;

if (percentage < 0 || percentage > 100) {
    console.log("invalid percentage");
} else if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80 && percentage < 90) {
    console.log("Grade B");
} else if (percentage >= 70 && percentage < 80) {
    console.log("Grade C");
} else if (percentage >= 60 && percentage < 70) {
    console.log("Grade D");
} else if (percentage >= 40 && percentage < 60) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}



