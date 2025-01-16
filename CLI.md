## 1. Initialize TrendUI in Your Project
The `init` command sets up TrendUI and configures it based on your preferences.

**Command:**
```bash
npx trendui init
```

When you run the command, it prompts you to answer a series of questions:

1. **Would you like to use TypeScript?**
   - Choose whether you want the setup to include TypeScript support.

2. **Would you like to use Tailwind CSS?**
   - Enable Tailwind CSS integration for styling components.

3. **Where would you like to store your components?**
   - Specify the directory where TrendUI components will be stored (default: `trendui`).

Based on your responses:
- The CLI creates a configuration file (`trendui.config.js`) with your preferences.
- If Tailwind CSS is enabled, the CLI automatically:
  - Installs Tailwind CSS, Nativewind, and twrnc.
  - Sets up a `tailwind.config.js` file tailored to your project.
  - Configures Babel to work with Nativewind.

---

## 2. Add Specific Components
Use the `add` command to add TrendUI components to your project.

**Command:**
```bash
npx trendui add [component-names]
```

**Example:**
```bash
npx trendui add button textinput
```
This adds the `Button` and `TextInput` components to your project.

---

## 3. List Available Components
The `list` command displays all components available in TrendUI.

**Command:**
```bash
npx trendui list
```

---

## Example Workflow

1. Run the CLI to initialize TrendUI:
   ```bash
   npx trendui init
   ```
   Respond to the prompts based on your project requirements. For instance:
   - Enable TypeScript.
   - Use Tailwind CSS.
   - Set the components directory to `src/components`.

2. Add a `Button` component:
   ```bash
   npx trendui add button
   ```

3. Verify the setup by importing and using the `Button` component in your project:
   ```javascript
   import { Button } from '@trendui/react-native';

   export default function App() {
     return <Button title="Click Me" onPress={() => alert('Hello, TrendUI!')} />;
   }
   ```

4. Start your development server:
   ```bash
   npm start
   ```

---

## Configuration File

The `trendui.config.js` file stores your project’s TrendUI configuration. Example:

```javascript
module.exports = {
  typescript: true,
  componentPath: "src/components",
  tailwindcss: true,
};
```

---

## Advanced Tailwind CSS Setup
If Tailwind CSS is enabled during initialization, the CLI will:

1. Create a `tailwind.config.js` file with the following content:
   ```javascript
   module.exports = {
     content: [
       "./app/**/*.{js,jsx,ts,tsx}",
       "./components/**/*.{js,jsx,ts,tsx}",
       "./trendui/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

2. Update or create a Babel configuration file to integrate Nativewind:
   ```javascript
   module.exports = function (api) {
     api.cache(true);
     return {
       presets: [
         ["babel-preset-expo", { jsxImportSource: "nativewind" }],
         "nativewind/babel",
       ],
     };
   };
   ```

---

With the TrendUI CLI, setting up and managing your components is quick and easy. Explore the power of automation and focus on building exceptional user experiences!

