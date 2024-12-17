const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { AVAILABLE_COMPONENTS } = require("../constants/constants");

/**
 * Show component selection menu if no components are passed in CLI.
 */
async function selectComponents() {
  const choices = Object.entries(AVAILABLE_COMPONENTS).map(([key, value]) => ({
    name: `${key} - ${value.description}`,
    value: key,
    short: key,
  }));

  const { components } = await inquirer.prompt([
    {
      type: "checkbox",
      message: "Select components to install:",
      name: "components",
      choices: choices,
      pageSize: 10,
      loop: false,
      validate: (answer) => {
        if (answer.length < 1) return "You must choose at least one component.";
        return true;
      },
    },
  ]);

  return components;
}

/**
 * Add a component by copying its files and updating the index.tsx.
 */
async function addComponent(componentName, config, componentDir) {
  try {
    const availableComponentsLower = Object.keys(AVAILABLE_COMPONENTS).map((c) =>
      c.toLowerCase()
    );

    // Validate component name
    if (!availableComponentsLower.includes(componentName.toLowerCase())) {
      console.error(chalk.red(`Component "${componentName}" not found!`));
      return false;
    }

    // Find the proper component key with correct casing
    const componentKey = Object.keys(AVAILABLE_COMPONENTS).find(
      (c) => c.toLowerCase() === componentName.toLowerCase()
    );

    const templatePath = path.join(__dirname, "../components", componentKey);

    if (!fs.existsSync(templatePath)) {
      console.error(chalk.red(`Component template not found at ${templatePath}`));
      return false;
    }

    // Destination path
    const destPath = path.join(componentDir, AVAILABLE_COMPONENTS[componentKey].name);

    // Copy component
    await fs.copy(templatePath, destPath);
    console.log(chalk.green(`✔ Added ${componentKey} component successfully!`));

    // Update or create index.tsx
    await updateIndexFile(componentDir);

    return true;
  } catch (error) {
    console.error(chalk.red(`Error adding ${componentName}:`), error);
    return false;
  }
}

/**
 * Update or create index.tsx to export all components.
 */
async function updateIndexFile(componentDir) {
  const indexPath = path.join(componentDir, "index.tsx");
  const componentNames = fs
    .readdirSync(componentDir)
    .filter((name) => fs.statSync(path.join(componentDir, name)).isDirectory());

  const exportStatements = componentNames
    .map((name) => `export { default as ${name} } from './${name}';`)
    .join("\n");

  await fs.writeFile(indexPath, exportStatements);
  console.log(chalk.yellow("🔄 Updated index.tsx with new exports."));
}

/**
 * Main add function to manage adding components.
 */
async function add(components = []) {
  try {
    // Load config
    const configPath = path.join(process.cwd(), "trendui.config.js");

    if (!fs.existsSync(configPath)) {
      console.error(chalk.red("trendui.config.js not found in your project root!"));
      return;
    }

    const config = require(configPath);
    const componentDir = path.join(process.cwd(), config.componentPath);

    // If no components specified, show interactive selector
    const selectedComponents =
      components.length > 0 ? components : await selectComponents();

    // Handle "*" for copying all components
    const componentsToInstall =
      selectedComponents.includes("*") || selectedComponents.includes("all")
        ? Object.keys(AVAILABLE_COMPONENTS)
        : selectedComponents;

    let successCount = 0;

    for (const component of componentsToInstall) {
      const result = await addComponent(component, config, componentDir);
      if (result) successCount++;
    }

    console.log(
      chalk.green(`\n✔ Successfully installed ${successCount} component(s)!`)
    );
  } catch (error) {
    console.error(chalk.red("Error in add command:"), error);
  }
}

module.exports = { add, AVAILABLE_COMPONENTS };
