console.log("hello world");
const user = function () {
    console.log("Enter the number, which is even as well as prime.");
    while (true) {
        let number  = prompt("that number is : ");
        if (number == 2) {
            break;
        } else {
            continue;
        }
    }
    console.log("You guessed it correct.");
}
console.log(user());
