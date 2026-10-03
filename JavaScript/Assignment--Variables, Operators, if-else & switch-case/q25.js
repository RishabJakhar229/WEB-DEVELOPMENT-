let age = 20;
let numberOfTickets = 4;

let totalTicketPrice;

if (age < 0) {
    console.log("Invalid Age");
} else if (age <= 12) {
    totalTicketPrice = 100 * numberOfTickets
} else if (age <= 59) {
    totalTicketPrice = 200 * numberOfTickets
} else {
    totalTicketPrice = 120 * numberOfTickets
}

console.log("Total", totalTicketPrice);

