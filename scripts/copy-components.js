import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve user project root directory
const userProjectRoot = path.resolve(__dirname, "../../../../");

// Paths
const srcComponentsDir = path.join(__dirname, "../src/components"); // Source components folder
const destDir = path.join(userProjectRoot, "trendui"); // Destination folder in user project

// Copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error("Source folder does not exist:", src);
    process.exit(1);
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Run the copy operation
console.log(`Copying components from ${srcComponentsDir} to ${destDir}...`);
copyDir(srcComponentsDir, destDir);
console.log("TrendUI components have been added to your project root.");
