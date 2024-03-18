import inquirer from "inquirer";

let number1 = 2;
let number2 = 10;
let total = number1 + number2;
let number3 = total ** 2; //exponentiation
let number4 = number3 % 10; // 144 mod 10 = 4
console.log("\n10 + 2 = " + total, "\n12^2 = " + number3, "\n144 mod 10 = " + number4);
let a = 5;
let b = 2;
let c = ++a + a++ + --b + b-- + a + b++ + b; //6+5+1+1+5+2+2 = 22, NOTE: value only updates in prefix.
console.log("Unary operators result is: " + c);
let number5 = c + 2 * 5; // 22 + 2 * 5 = 32
console.log("Combining operator result is: " + number5);
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Input first number: "
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Input second number: "
});
let total1 = input1.num1 + input2.num2
console.log(total1);