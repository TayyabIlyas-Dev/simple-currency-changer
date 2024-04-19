#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
let conversionRates = {
    USD: 1,
    IND: 97,
    PKR: 270,
    TAKA: 110,
    DINAR: 310,
    DIRHAM: 82,
};
async function currencyConverter() {
    const questions = [
        {
            name: "amount",
            type: "number",
            message: "Please Enter Amount Which U Want To Convert."
        },
        {
            name: "toCurrency",
            type: "list",
            choices: ["USD", "IND", "PKR", "TAKA", "DINAR", "DIRHAM"],
            message: "Please choose which Currency Do U Have. "
        },
        {
            name: "fromCurrency",
            type: "list",
            choices: ["USD", "IND", "PKR", "TAKA", "DINAR", "DIRHAM"],
            message: "Please choose which Currency Do u Want to Convert. "
        },
    ];
    const answers = await inquirer.prompt(questions);
    const amount = parseFloat(answers.amount);
    const fromCurrency = answers.fromCurrency;
    const toCurrency = answers.toCurrency;
    const convertedAmount = amount * (conversionRates[toCurrency] / conversionRates[fromCurrency]);
    const ans = (`            Your ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    console.log(chalk.greenBright(ans));
}
currencyConverter();
