# TrendUI - React Native UI Library

**TrendUI** is a modern and lightweight React Native UI library designed to simplify mobile app development. It offers a collection of customizable, prebuilt components to help developers build beautiful, performant, and consistent user interfaces with ease.

## ✨ Key Features

- **Wide Range of Components**: Includes versatile components such as `Button`, `TextInput`, `Image`, `Select`, and more.
- **Customizable & Flexible**: Fully customizable components with support for styles, themes, and variants to match your design system.
- **Easy CLI Integration**: Use the TrendUI CLI to initialize or add components seamlessly to your project.
- **Optimized for React Native**: Tailored for performance and smooth rendering on both iOS and Android platforms.
- **Supports TailwindCSS**: Integrated support for `twrnc` and `nativewind` for rapid styling with TailwindCSS utility classes.

---

## 🚀 Getting Started

Follow these steps to set up **TrendUI** in your React Native project.

### 1. Installation

Install the library and required peer dependencies:

**Using npm**:
```bash
npm install @trendui/react-native --save
```

**Using yarn**:
```bash
yarn add @trendui/react-native
```

### 2. CLI Setup (Optional)

**TrendUI** provides a CLI to streamline the process of adding components to your project.

#### Link the CLI locally (for testing/development):

```bash
npm link
```

#### Use the CLI Commands:

- **Initialize** TrendUI in your project:
  ```bash
  npx trendui init
  ```

- **Add Specific Components**:
  ```bash
  npx trendui add button textinput
  ```

- **List Available Components**:
  ```bash
  npx trendui list
  ```

---

## 📦 Components List

TrendUI comes with a variety of prebuilt components:

| Component   | Description                              |
|-------------|------------------------------------------|
| `Button`    | A customizable button component          |
| `TextInput` | A flexible input field for user text     |
| `Image`     | An image component with animation loader |
| `Text`      | Styled text component with themes        |
| `Select`    | Dropdown component for selections        |

---

## 🛠 Usage

Here’s an example of how to use the **TrendUI** components:

### Button Component

```tsx
import React from "react";
import { Button } from "@/trendui";

const App = () => {
  return (
    <Button
      value="Submit"
      variant="primary"
      onPress={() => console.log("Button Pressed")}
      className="mt-4 h-[13] mx-4"
      loading={false} // it will show loader spinner when it's true
      textStyle={{ fontSize: 25 }}
    />
  );
};

export default App;
```

### TextInput Component

```tsx
import React, { useState } from "react";
import { TextInput } from '@/trendui';

export default function App() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [message,setMessage] = useState("");

  return (
  <>
    <TextInput
      value={name}
      placeholder="Enter name here"
      type="text"
      style={{marginTop:5,marginBottom:10,marginHorizontal:5Ï}} //any styling
      className="" //any tailwindcss className
      onChangeText={setName}
    />

    <TextInput
      value={email}
      placeholder="Enter email here"
      type="email"
      style={{marginBottom:10,marginHorizontal:5Ï}} //any styling
      className="" //any tailwindcss className
      onChangeText={setEmail}
    />

      <TextInput
      value={password}
      placeholder="Enter password here"
      type="password"
      style={{marginBottom:10,marginHorizontal:5Ï}} //any styling
      className="" //any tailwindcss className
      onChangeText={setPassword}
      minLength={6}
      maxLength={8}
    />

    <TextInput
      value={message}
      placeholder="Enter message here"
      type="text"
      style={{marginTop:5,marginBottom:10,marginHorizontal:5Ï}} //any styling
      multiline={true}
      className="" //any tailwindcss className
      onChangeText={setName}
    />
    </>
  );
}
```

---

## 🔧 Configuration

Create a `trendui.config.js` file in the root of your project to configure where components are installed.

```javascript
module.exports = {
  componentPath: "src/components", // Path where components will be added
};
```

---

## 📘 Available CLI Commands

| Command                  | Description                              |
|--------------------------|------------------------------------------|
| `npx trendui init`       | Initialize TrendUI in your project      |
| `npx trendui add <name>` | Add specific components to your project |
| `npx trendui list`       | List all available components           |

---

## 🧩 Directory Structure

After installing components, your project structure will look like this:

```
/src
  /trendui
    /Button
      Button.tsx
    /TextInput
      TextInput.tsx
    index.tsx
```

The `index.tsx` file will auto-export all components, allowing you to import components seamlessly:

```tsx
import { Button, TextInput } from './components';
```

---

## 🌟 Contribution

Contributions are always welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add a new feature"`.
4. Push the changes: `git push origin feature/your-feature-name`.
5. Submit a pull request.

---

## 🛡 License

This project is licensed under the **MIT License**.

---

## 💬 Support

If you face any issues or have suggestions, feel free to open an issue in the repository.

---

## 🎉 Stay Updated

Follow **TrendUI** on GitHub to get the latest updates and features.

---

Enjoy building your React Native apps faster and better with **TrendUI**! 🚀