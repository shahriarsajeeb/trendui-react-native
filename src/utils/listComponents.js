// src/utils/listComponents.js
const chalk = require("chalk");
const { AVAILABLE_COMPONENTS } = require("../constants/constants");

function listComponents() {
  console.log(chalk.blue("\nAvailable components:"));
  Object.entries(AVAILABLE_COMPONENTS).forEach(([key, value]) => {
    console.log(chalk.green(`- ${key}`));
  });
  console.log();
}

module.exports = listComponents;
