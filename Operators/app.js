"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var number1 = 2;
var number2 = 10;
var total = number1 + number2;
var number3 = Math.pow(total, 2); //exponentiation
var number4 = number3 % 10; // 144 mod 10 = 4
console.log("\n10 + 2 = " + total, "\n12^2 = " + number3, "\n144 mod 10 = " + number4);
var a = 5;
var b = 2;
var c = ++a + a++ + --b + b-- + a + b++ + b; //6+5+1+1+5+2+2 = 22, NOTE: value only updates in prefix.
console.log("Unary operators result is: " + c);
var number5 = c + 2 * 5; // 22 + 2 * 5 = 32
console.log("Combining operator result is: " + number5);
var input1 = await inquirer_1.default.prompt({
    name: "num1",
    type: "number",
    message: "Input first number: "
});
var input2 = await inquirer_1.default.prompt({
    name: "num2",
    type: "number",
    message: "Input second number: "
});
var total1 = input1.num1 + input2.num2;
console.log(total1);
