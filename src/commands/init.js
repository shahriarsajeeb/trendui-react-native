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

    if (answers.tailwind) {
      console.log(chalk.blue("Setting up Tailwind CSS..."));

      // Install Tailwind CSS, Nativewind, and related dependencies
      execSync(
        "npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context --save",
        { stdio: "inherit" }
      );

      // Create or update global.css
      const globalCssPath = path.join(process.cwd(), "global.css");
      if (!(await fs.pathExists(globalCssPath))) {
        await fs.writeFile(
          globalCssPath,
          "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"
        );
        console.log(chalk.green("✔ global.css file created!"));
      } else {
        const existingContent = await fs.readFile(globalCssPath, "utf8");
        if (
          !existingContent.includes("@tailwind base;") ||
          !existingContent.includes("@tailwind components;") ||
          !existingContent.includes("@tailwind utilities;")
        ) {
          const updatedContent = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n${existingContent}`;
          await fs.writeFile(globalCssPath, updatedContent);
          console.log(chalk.green("✔ global.css file updated!"));
        }
      }

      // Create tailwind.config.js
      const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.js");
      if (!(await fs.pathExists(tailwindConfigPath))) {
        const tailwindConfigContent = `
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./${answers.componentPath}/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
        await fs.writeFile(tailwindConfigPath, tailwindConfigContent);
        console.log(chalk.green("✔ tailwind.config.js file created!"));
      }

      // Update Babel configuration
      const babelFiles = [
        "babel.config.cjs",
        "babel.config.js",
        "babel.config.mjs",
      ];
      let babelFileFound = false;

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
          babelFileFound = true;
          break;
        }
      }

      if (!babelFileFound) {
        const newBabelPath = path.join(process.cwd(), "babel.config.js");
        const newBabelConfigContent = `
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
        await fs.writeFile(newBabelPath, newBabelConfigContent);
        console.log(
          chalk.green("✔ Babel configuration created as babel.config.js!")
        );
      }

      // Update _layout.tsx file
      const appFolder = await fs.pathExists("app")
        ? "app"
        : await fs.pathExists("src/app")
        ? "src/app"
        : null;

      if (appFolder) {
        const layoutFilePath = path.join(process.cwd(), appFolder, "_layout.tsx");
        if (await fs.pathExists(layoutFilePath)) {
          const layoutContent = await fs.readFile(layoutFilePath, "utf8");
          if (!layoutContent.includes(`import "../global.css";`)) {
            const updatedLayoutContent = `import "../global.css";\n${layoutContent}`;
            await fs.writeFile(layoutFilePath, updatedLayoutContent);
            console.log(chalk.green("✔ _layout.tsx file updated!"));
          }
        }
      }

      // Update or create metro.config.js
      const metroConfigFiles = [
        path.join(process.cwd(), "metro.config.js"),
        path.join(process.cwd(), "metro.config.ts"),
      ];
      let metroConfigPath = null;

      for (const filePath of metroConfigFiles) {
        if (await fs.pathExists(filePath)) {
          metroConfigPath = filePath;
          break;
        }
      }

      if (!metroConfigPath) {
        console.log(chalk.blue("Creating metro.config.js..."));
        execSync("npx expo customize metro.config.js", { stdio: "inherit" });
        metroConfigPath = path.join(process.cwd(), "metro.config.js");
      }

      const metroConfigContent = `
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
`;
      await fs.writeFile(metroConfigPath, metroConfigContent);
      console.log(chalk.green("✔ metro.config.js updated!"));

      console.log(chalk.green("✔ Tailwind CSS setup completed!"));
    }
  } catch (error) {
    console.error(chalk.red("Error initializing TrendUI:"), error);
  }
}

module.exports = init;
