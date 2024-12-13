// src/commands/init.js
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

async function init() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "typescript",
        message: "Would you like to use TypeScript?",
        default: true,
      },
      {
        type: "input",
        name: "componentPath",
        message: "Where would you like to store your components?",
        default: "src/components",
      },
    ]);

    // Create component directory
    const componentDir = path.join(process.cwd(), answers.componentPath);
    await fs.ensureDir(componentDir);

    // Create configuration file
    const configPath = path.join(process.cwd(), "trendui.config.js");
    const config = {
      typescript: answers.typescript,
      componentPath: answers.componentPath,
    };

    await fs.writeFile(
      configPath,
      `module.exports = ${JSON.stringify(config, null, 2)}`
    );

    console.log(chalk.green("✔ TrendUI initialized successfully!"));
  } catch (error) {
    console.error(chalk.red("Error initializing TrendUI:"), error);
  }
}

module.exports = init;
