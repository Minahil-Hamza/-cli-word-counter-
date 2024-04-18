#! /usr/bin/env node

// import the 'inquirer' module, which is the command line interface for Node.js;

import inquirer from 'inquirer';

//Declare a constant 'answers' & assign it to the result of inquirer.prompt function
const userAns: {
    sentence: string 
}  = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: "Enter Your Sentence to count the word:"
        }
    ]
)

const words = userAns.sentence.trim().split(" ")

//print the array of words to the console :
console.log(words);

//print the word count of the senstence to the console:

console.log(`your sentence word count is ${words.length}`);