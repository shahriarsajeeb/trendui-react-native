// src/commands/add.js
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

const AVAILABLE_COMPONENTS = {
  button: {
    name: "Button",
    description: "A customizable button component",
  },
  text: {
    name: "Text",
    description: "A text component with various styles",
  },
  input: {
    name: "Input",
    description: "Text input component",
  },
  card: {
    name: "Card",
    description: "Container component with shadow",
  },
  avatar: {
    name: "Avatar",
    description: "Circular image component",
  },
  checkbox: {
    name: "Checkbox",
    description: "Selectable checkbox component",
  },
  switch: {
    name: "Switch",
    description: "Toggle switch component",
  },
  spinner: {
    name: "Spinner",
    description: "Loading spinner animation",
  },
};

async function selectComponents() {
  const choices = Object.entries(AVAILABLE_COMPONENTS).map(([key, value]) => ({
    name: `${key} - ${value.description}`,
    value: key,
    short: key,
  }));

  const { components } = await inquirer.prompt([
    {
      type: "checkbox",
      message:
        "Select components to install (Space to select, A to toggle all, Enter to confirm):",
      name: "components",
      choices: choices,
      pageSize: 10,
      loop: false,
      validate: (answer) => {
        if (answer.length < 1) {
          return "You must choose at least one component.";
        }
        return true;
      },
    },
  ]);

  return components;
}

async function addComponent(componentName, config, componentDir) {
  try {
    const templatePath = path.join(
      __dirname,
      "../components",
      componentName.toLowerCase()
    );

    await fs.copy(
      `${templatePath}`,
      path.join(componentDir, `${AVAILABLE_COMPONENTS[componentName].name}`)
    );

    console.log(
      chalk.green(`✔ Added ${componentName} component successfully!`)
    );
  } catch (error) {
    console.error(chalk.red(`Error adding ${componentName}:`), error);
    return false;
  }
  return true;
}

async function add(components = []) {
  try {
    // Load config
    const configPath = path.join(process.cwd(), "trendui.config.js");
    const config = require(configPath);
    const componentDir = path.join(process.cwd(), config.componentPath);

    // If no components specified, show interactive selector
    const selectedComponents =
      components.length > 0 ? components : await selectComponents();

    // Handle installation
    for (const component of selectedComponents) {
      const componentLower = component.toLowerCase();
      await addComponent(componentLower, config, componentDir);
    }

    console.log(
      chalk.green(
        `\n✔ Successfully installed ${selectedComponents.length} component(s)!`
      )
    );
  } catch (error) {
    console.error(chalk.red("Error in add command:"), error);
  }
}

module.exports = { add, AVAILABLE_COMPONENTS };
