"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var weightInKg = await inquirer_1.default.prompt({
    name: "Weight",
    type: "number",
    message: "\nPlease enter your weight in kg: "
});
var heightInCm = await inquirer_1.default.prompt({
    name: "Height",
    type: "number",
    message: "\nPlease enter your height in cm: ",
});
var bmi = weightInKg.Weight / (heightInCm.Height * heightInCm.Height);
console.log("\nYour BMI is: " + bmi);
