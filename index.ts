#!/usr/bin/env node 

console.log("________________________________");
console.log("***Temprature Scale Convertor***")
console.log("--------------------------------");

import inquirer from "inquirer"

const answer = await inquirer.prompt([
{message: "Select one option which you wants to perform: ", 
type: "list", 
name: "operator", 
choices: ["1.From Celsius to Fahrenheit", "2.From Celsius to Kelvin", "3.From Fehranheit to celsius",
 "4.From Fehranheit to Kelvin", "5.From Kelvin to Fehrenheit", "6.From Kelvin to Celsius" ],
}])

// conditional statements
if(answer.operator === "1.From Celsius to Fahrenheit")
{
    const answer = await inquirer.prompt([
    {
    message:"Enter Temprature in Celsius: ", type: "number", name:"celsius", 
}])
let ctof = 32 + 9/5 * answer.celsius;
console.log("Temprature in Celsius is: " + ctof)
}

else if(answer.operator === "2.From Celsius to Kelvin")
{
    const answer = await inquirer.prompt([
    {
    message:"Enter Temprature in Celsius: ", type: "number", name:"celsius", 
}])
let ctok = answer.celsius + 273.15;
console.log("Temprature in Kelvin is: " + ctok)
}

else if(answer.operator === "3.From Fehranheit to celsius")
{
    const answer = await inquirer.prompt([
    {
    message:"Enter Temprature in Fehranheit: ", type: "number", name:"Fehranheit", 
}])
let ftoc = (answer.Fehranheit-32) * 5/9;
console.log("Temprature in Celsius is: " + ftoc)
}
else if(answer.operator === "4.From Fehranheit to Kelvin")
{
    const answer = await inquirer.prompt([{
        message: "Enter Temprature in Fahrenheit:  ", type: "number", name: "Fahranheit"
    }])
    let ftok = (answer.Fahranheit - 32) * 5/9;
    console.log("Temprature in Kelvin is: " + ftok)
}

else if(answer.operator === "5.From Kelvin to Fehrenheit")
{
    const answer = await inquirer.prompt([{
        message: "Enter Temprature in Kelvin", type: "number", name: "Kelvin"
    }])
    let ktof = (answer.Kelvin - 273.15) * 9 / 5 + 32;
    console.log("Temprature in Fahrenheit is : " + ktof)
}

else if(answer.operator === "6.From Kelvin to Celsius")
{
    const answer = await inquirer.prompt([{
        message: "Enter Temprature in Kelvin: ", type: "number", name: "Kelvin"
    }])
    let ktoc = answer.Kelvin - 273.17;
    console.log("Temprature in Celsius is: " + ktoc);
    
}