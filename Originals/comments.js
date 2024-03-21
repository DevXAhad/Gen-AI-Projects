export {};
/* original code for Simple-calculator
import chalk from "chalk";
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const result = await inquirer.prompt([
  { message: chalk.blueBright.bold ("\nPlease enter first digit:"),
  type: "number",
  name: "message1"
  },

  { message: chalk.greenBright.bold ("\nPlease enter second digit:"),
  type: "number",
  name: "message2"
  },

  {
    message: chalk.redBright.bold ("\nPlease choose the operation to be performed:"),
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
]);
if (result.operators === "Addition"){
    console.log(`\nYour answer is: ${result.message1 + result.message2}`)
}
else if (result.operators === "Multiplication"){
    console.log(`\nYour answer is: ${result.message1 * result.message2}`)
}
else if (result.operators === "Subtraction"){
    console.log(`\nYour answer is: ${result.message1 - result.message2}`)
}
else if (result.operators === "Division"){
    console.log(`\nYour answer is: ${result.message1 / result.message2}`)
}
else{
    console.log("\nYour input is invalid, please try again.")
}; */ 
