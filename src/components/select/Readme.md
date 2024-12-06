# React Native Customizable Dropdown Component

A flexible and highly customizable dropdown (select) component for React Native applications. This component supports both light and dark themes, multiple style variants, and TailwindCSS integration.

---

## Features

- **Theming**: Supports `light` and `dark` themes.
- **Customizable Styles**: Easily customize container, label, placeholder, and dropdown options.
- **Dynamic Placeholder**: Placeholder text adapts based on the selected value.
- **Error Handling**: Display error messages with custom styles.
- **TailwindCSS Support**: Style components using TailwindCSS classes.
- **Variants**: Choose between `outlined`, `filled`, and `standard` style variants.

---

## Installation

```bash
npm install @your-namespace/react-native-custom-dropdown
or
yarn add @your-namespace/react-native-custom-dropdown
```

## Usage

# Basic Example

```
import React, { useState } from "react";
import { View } from "react-native";
import Select from "@your-namespace/react-native-custom-dropdown";

export default function App() {
const [selectedValue, setSelectedValue] = useState("");

const options = [
{ label: "Option 1", value: "option1" },
{ label: "Option 2", value: "option2" },
{ label: "Option 3", value: "option3" },
];

return (
<View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
<Select
label="Choose an option"
placeholder="Select an option"
options={options}
value={selectedValue}
onValueChange={(value) => setSelectedValue(value)}
theme="light"
variant="outlined"
error="This is an error message"
/>
</View>
);
}
```
