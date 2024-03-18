import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const result = await inquirer.prompt([
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
if (result.operators === "Addition"){
    console.log(`Your answer is: ${result.message1 + result.message2}`)
}
else if (result.operators === "Multiplication"){
    console.log(`Your answer is: ${result.message1 * result.message2}`)
}
else if (result.operators === "Subtraction"){
    console.log(`Your answer is: ${result.message1 - result.message2}`)
}
else if (result.operators === "Division"){
    console.log(`Your answer is: ${result.message1 / result.message2}`)
}
else{
    console.log("Your input is invalid, please try again.")
};