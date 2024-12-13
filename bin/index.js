#!/usr/bin/env node
// bin/index.js

const { program } = require("commander");
const init = require("../src/commands/init");
const { add } = require("../src/commands/add");
const list = require("../src/commands/list");

program.version("1.0.0").description("TrendUI CLI for React Native components");

program
  .command("init")
  .description("Initialize TrendUI in your React Native project")
  .action(init);

program
  .command("add [components...]")
  .description("Add TrendUI components to your project")
  .action((components) => add(components));

program
  .command("list")
  .description("List all available components")
  .action(list);

program.parse(process.argv);
