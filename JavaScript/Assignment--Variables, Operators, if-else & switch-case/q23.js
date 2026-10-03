let signal = "red"

switch (signal) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("WAIT");
    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid signal");

}
