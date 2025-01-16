# Select Component

The `Select` component is a flexible and customizable dropdown component designed for React Native applications. It supports themes, TailwindCSS integration, and dynamic styling for a seamless user experience.

---

## Installation
```bash
npx trendui add select
```

---


## Features

- **Customizable Placeholder and Label**: Add descriptive labels and placeholders.
- **Dynamic Options**: Pass an array of options to populate the dropdown.
- **Error Messages**: Display validation errors with customizable styles.
- **Light and Dark Themes**: Supports theme-based styling for light and dark modes.
- **Variants**: Outlined, filled, and standard styles for different design preferences.
- **TailwindCSS Support**: Easily integrate TailwindCSS classes for styling.
- **Customizable Styles**: Style the container, label, options, and more.
- **Modal-Based Dropdown**: Ensures proper display even on small screens.


## Props

| Prop                 | Type                                      | Default               | Description                                                                 |
|----------------------|-------------------------------------------|-----------------------|-----------------------------------------------------------------------------|
| `label`              | `string`                                 | `undefined`           | The label displayed above the dropdown.                                    |
| `placeholder`        | `string`                                 | `"Select an option"`  | Placeholder text displayed in the dropdown.                                |
| `options`            | `{ label: string; value: any }[]`        | `[]`                 | Array of options for the dropdown. Each option must have `label` and `value`. |
| `value`              | `any`                                    | `undefined`           | The selected value of the dropdown.                                        |
| `onValueChange`      | `(value: any) => void`                   | `undefined`           | Callback triggered when a new value is selected.                           |
| `error`              | `string`                                 | `undefined`           | Error message displayed below the dropdown.                                |
| `variant`            | `"outlined" | "filled" | "standard"`      | `"outlined"`         | The style variant of the dropdown.                                         |
| `style`              | `StyleProp<ViewStyle>`                   | `undefined`           | Custom styles for the dropdown container.                                  |
| `labelStyle`         | `StyleProp<TextStyle>`                   | `undefined`           | Custom styles for the label.                                               |
| `errorStyle`         | `StyleProp<TextStyle>`                   | `undefined`           | Custom styles for the error message.                                       |
| `dropdownStyle`      | `StyleProp<ViewStyle>`                   | `undefined`           | Custom styles for the dropdown options container.                          |
| `optionStyle`        | `StyleProp<ViewStyle>`                   | `undefined`           | Custom styles for individual options.                                      |
| `optionTextStyle`    | `StyleProp<TextStyle>`                   | `undefined`           | Custom styles for the option text.                                         |
| `placeholderStyle`   | `StyleProp<TextStyle>`                   | `undefined`           | Custom styles for the placeholder text.                                    |
| `theme`              | `"light" | "dark"`                       | `"light"`             | The theme of the dropdown.                                                 |
| `className`          | `string`                                 | `undefined`           | TailwindCSS classes for the dropdown container.                            |
| `dropdownClassName`  | `string`                                 | `undefined`           | TailwindCSS classes for the dropdown options container.                    |
| `optionClassName`    | `string`                                 | `undefined`           | TailwindCSS classes for individual dropdown options.                       |

---

## Usage

### Basic Usage

```tsx
import React from "react";
import { Select } from "@/trendui";

export default function App() {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const handleValueChange = (value: any) => {
    console.log("Selected value:", value);
  };

  return (
    <Select
      label="Select an Option"
      options={options}
      placeholder="Choose an option"
      onValueChange={handleValueChange}
    />
  );
}
```

---

### Displaying Error Messages

```tsx
<Select
  label="Select an Option"
  options={options}
  error="This field is required"
  onValueChange={(value) => {}}
/>
```

---

### Customizing Styles

```tsx
<Select
  label="Custom Dropdown"
  options={options}
  style={{ borderColor: "blue", borderWidth: 2 }}
  labelStyle={{ color: "purple", fontSize: 18 }}
  errorStyle={{ color: "red", fontSize: 14 }}
  placeholderStyle={{ color: "grey" }}
/>
```

---

### Using TailwindCSS

```tsx
<Select
  label="Tailwind Dropdown"
  options={options}
  className="bg-white p-4 rounded-md"
  dropdownClassName="bg-gray-200"
  optionClassName="p-4 border-b border-gray-300"
/>
```

---

### Dark Theme

```tsx
<Select
  label="Dark Themed Dropdown"
  options={options}
  theme="dark"
/>
```

---

## Customization

### Adding More Variants

To add more style variants, modify the `variant` prop and include custom styles for each variant in the `styles` object in the component.

---

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/trend-ui/trendui-react-native/issues) on the repository.

---

## License

This component is licensed under the **MIT License** as part of the TrendUI library.