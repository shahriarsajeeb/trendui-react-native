// src/commands/init.js
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { execSync } = require("child_process");

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
        type: "confirm",
        name: "tailwind",
        message: "Would you like to use Tailwind CSS?",
        default: true,
      },
      {
        type: "input",
        name: "componentPath",
        message: "Where would you like to store your components?",
        default: "trendui",
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
      tailwindcss: answers.tailwind,
    };

    await fs.writeFile(
      configPath,
      `module.exports = ${JSON.stringify(config, null, 2)}`
    );

    console.log(chalk.green("✔ TrendUI initialized successfully!"));

    // Handle Tailwind CSS setup
    if (answers.tailwind) {
      console.log(chalk.blue("Setting up Tailwind CSS..."));

      // Install Tailwind CSS, Nativewind, and twrnc
      execSync("npm install tailwindcss nativewind twrnc --save", {
        stdio: "inherit",
      });

      // Initialize Tailwind configuration
      const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.js");
      const tailwindConfigContent = `
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./${answers.componentPath}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
      await fs.writeFile(tailwindConfigPath, tailwindConfigContent);
      console.log(chalk.green("✔ Tailwind CSS configuration created!"));

      // Update Babel configuration
      const babelFiles = [
        "babel.config.cjs",
        "babel.config.js",
        "babel.config.mjs",
      ];
      let babelUpdated = false;

      for (const file of babelFiles) {
        const babelPath = path.join(process.cwd(), file);
        if (await fs.pathExists(babelPath)) {
          const babelConfigContent = `
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
`;
          await fs.writeFile(babelPath, babelConfigContent);
          console.log(chalk.green(`✔ Babel configuration updated in ${file}!`));
          babelUpdated = true;
          break;
        }
      }

      if (!babelUpdated) {
        console.log(
          chalk.yellow(
            "⚠ No existing Babel configuration found. Please create one manually if needed."
          )
        );
      }
    }
  } catch (error) {
    console.error(chalk.red("Error initializing TrendUI:"), error);
  }
}

module.exports = init;
