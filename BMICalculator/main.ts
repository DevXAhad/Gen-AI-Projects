import inquirer from "inquirer";
let weightInKg = await inquirer.prompt({
    name: "Weight",
    type: "number",
    message: "\nPlease enter your weight in kg: "
});
let heightInCm = await inquirer.prompt({
    name: "Height",
    type: "number",
    message: "\nPlease enter your height in cm: ",                              
});
let bmi = weightInKg.Weight / (heightInCm.Height * heightInCm.Height)
console.log(`\nYour BMI is: ` + bmi); 