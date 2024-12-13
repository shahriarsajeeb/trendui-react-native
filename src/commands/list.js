// src/commands/list.js
const chalk = require("chalk");
const { AVAILABLE_COMPONENTS } = require("./add");

async function list() {
  console.log(chalk.blue("\nAvailable components:"));
  Object.entries(AVAILABLE_COMPONENTS).forEach(([key, value]) => {
    console.log(chalk.green(`- ${key}`));
    console.log(chalk.gray(`  ${value.description}`));
  });
  console.log();
}

module.exports = list;
