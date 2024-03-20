#! /usr/bin/env mode
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* import chalk from "chalk";
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
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var result = await inquirer_1.default.prompt([
    {
        message: chalk_1.default.blueBright.bold("\nPlease enter first digit:"),
        type: "number",
        name: "message1"
    },
    {
        message: chalk_1.default.greenBright.bold("\nPlease enter second digit:"),
        type: "number",
        name: "message2"
    },
    {
        message: chalk_1.default.redBright.bold("\nPlease choose the operation to be performed:"),
        type: "list",
        name: "operators",
        choices: [
            chalk_1.default.cyanBright.bold("Addition"),
            chalk_1.default.blueBright.bold("Subtraction"),
            chalk_1.default.magentaBright.bold("Multiplication"),
            chalk_1.default.yellowBright.bold("Division")
        ]
    },
]);
if (result.operators === chalk_1.default.cyanBright.bold("Addition")) {
    console.log(chalk_1.default.bgCyan.bold("\nYour answer is: ".concat(result.message1 + result.message2)));
}
else if (result.operators === chalk_1.default.magentaBright.bold("Multiplication")) {
    console.log(chalk_1.default.bgCyan.bold("\nYour answer is: ".concat(result.message1 * result.message2)));
}
else if (result.operators === chalk_1.default.blueBright.bold("Subtraction")) {
    console.log(chalk_1.default.bgCyan.bold("\nYour answer is: ".concat(result.message1 - result.message2)));
}
else if (result.operators === chalk_1.default.yellowBright.bold("Division")) {
    if (result.message2 === 0) {
        console.log(chalk_1.default.bgRed.bold("\nError: Division by zero"));
    }
    else {
        console.log(chalk_1.default.bgCyan.bold("\nYour answer is: ".concat(result.message1 / result.message2)));
    }
}
else {
    console.log(chalk_1.default.bgRed.bold("\nYour input is invalid, please try again."));
}
