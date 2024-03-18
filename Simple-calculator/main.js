"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var result = await inquirer_1.default.prompt([
    { message: "Please enter first digit: ",
        type: "number",
        name: "message1"
    },
    { message: "Please enter second digit: ",
        type: "number",
        name: "message2"
    },
    {
        message: "Please choose the operation to be performed: ",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (result.operators === "Addition") {
    console.log("Your answer is: ." + result.message1 + result.message2);
}
console.log(result);
