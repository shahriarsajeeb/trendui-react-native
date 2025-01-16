# Checkbox Component

The `Checkbox` component is a versatile, customizable, and user-friendly React Native component for creating interactive checkboxes. It supports animations, labels, and a variety of styles to fit your application's needs.

---

## 📦 Installation
```bash
npx trendui add checkbox
```
---

## Features

- **Customizable**: Change size, colors, and styles of the checkbox and label.
- **Animated**: Smooth animation for checkbox selection (can be disabled).
- **Accessible**: Includes optional labels for better user understanding.
- **Lightweight**: Easy to integrate with minimal dependencies.
- **Flexible**: Support for left or right label positioning and various customizations.

---

## Props

| Prop            | Type               | Default       | Description                                                                 |
|------------------|--------------------|---------------|-----------------------------------------------------------------------------|
| `checked`        | `boolean`          | `false`       | The state of the checkbox (checked or not).                                 |
| `onChange`       | `(checked: boolean) => void` | -           | Callback function triggered when the checkbox is toggled.                   |
| `label`          | `string`           | `undefined`   | Text label displayed alongside the checkbox.                                |
| `labelPosition`  | `"left" | "right"` | `"right"`     | Determines whether the label is displayed to the left or right of the checkbox. |
| `size`           | `number`           | `24`          | Size of the checkbox.                                                      |
| `color`          | `string`           | `"#007BFF"`   | The color of the checkbox when selected.                                    |
| `disabled`       | `boolean`          | `false`       | If `true`, the checkbox is disabled and cannot be toggled.                  |
| `enableAnimation`| `boolean`          | `true`        | Toggles the fade animation when the checkbox is selected or deselected.     |
| `customStyles`   | `object`           | `{}`          | Custom styles for the checkbox container, checkbox, and label.              |
| `className`      | `object`           | `{}`          | TailwindCSS class names for the container, checkbox, and label.             |

---

## Usage

Below is an example demonstrating how to use the `Checkbox` component with various configurations:

```tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Checkbox } from "@/trendui";

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [subscribeChecked, setSubscribeChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 10,
        }}
      >
        {/* Basic Checkbox */}
        <Checkbox
          checked={isChecked}
          onChange={setIsChecked}
          label="Accept Terms"
        />

        {/* Customized Checkbox */}
        <Checkbox
          checked={subscribeChecked}
          onChange={setSubscribeChecked}
          enableAnimation={false}
          label="Subscribe"
          labelPosition="left"
          size={32}
          color="#28A745"
          customStyles={{
            label: { fontSize: 18, color: "#333" },
            checkbox: { borderColor: "#28A745" },
          }}
        />

        {/* Disabled Checkbox */}
        <Checkbox
          checked={true}
          onChange={() => {}}
          label="Disabled"
          disabled
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default App;
```

---

## Customization

The `Checkbox` component supports both inline styles via the `customStyles` prop and TailwindCSS class names via the `className` prop.

### Example of Custom Styling
```tsx
<Checkbox
  checked={true}
  onChange={() => {}}
  label="Custom Checkbox"
  size={28}
  color="#FF5733"
  customStyles={{
    container: { marginVertical: 10 },
    checkbox: { borderColor: "#FF5733" },
    label: { color: "#333", fontWeight: "bold" },
  }}
/>
```

### Example of TailwindCSS Class Names
```tsx
<Checkbox
  checked={true}
  onChange={() => {}}
  label="Tailwind Checkbox"
  className={{
    container: "my-4",
    checkbox: "border-red-500",
    label: "text-lg font-semibold",
  }}
/>
```

---

## License

This component is open-source and available under the MIT license. Enjoy using it in your projects! 😊