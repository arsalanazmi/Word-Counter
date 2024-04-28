#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count words",
});
let wordCounter = answer.Sentence.trim().split(" ");
console.log(wordCounter);
console.log(`Your sentence word count is ${wordCounter.length}`);
