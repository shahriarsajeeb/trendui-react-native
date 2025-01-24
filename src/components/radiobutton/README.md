# Radiobutton Component

A reusable and customizable Radio Button Group component for React Native. This component allows users to select one option from a list of radio buttons and supports custom styles, accessibility, and various button configurations.

![Tabs Demo](https://res.cloudinary.com/dwdivu60a/image/upload/v1737625508/qzae2eru7eovrm7bvzaf.gif)

## Installation

```bash
npx trendui add radiobutton
```

---

## Features

- **Accessibility**: Designed to be accessible with an easy-to-use API.
- **Customizable**: Easily customize the style, size, and color of radio buttons.
- **Disabled State**: Support for multiple sizes of radio buttons.
- **Event Handling**: Provides an easy-to-use event handler for changes in selection.

## Usage

Here’s a basic example of how to use the `RadioGroup` component:

```tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RadioGroup from "./radiobutton/RadioGroup";
import RadioButton from "./radiobutton/RadioButton";

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(null);

  const handleRadioChange = (value: string | number) => {
    setSelectedOption(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Choose your option</Text>
      <RadioGroup
        name="options"
        accessibilityLabel="Radio buttons"
        onChange={handleRadioChange}
      >
        <RadioButton label="Option 1" value="1" isDisabled size="sm" />
        <RadioButton label="Option 2" value="2" color="red" size="sm" />
        <RadioButton label="Option 3" value="3" color="yellow" />
        <RadioButton label="Option 4" value="4" color="green" size="lg" />
      </RadioGroup>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;

```

### RadioGroup Props

| Prop              | Type      | Default  | Description                                                   |         |
| ----------------- | --------- | -------- | ------------------------------------------------------------- | --------|
| `name`            | `string`   | Required | The name attribute for the radio group, used for grouping.   |  ✅     |
| `accessibilityLabel` | `string`  |   Required    | Index of the initially active tab.                    |  ❌     |
| `onChange`         | `(value: string|number) => void` | () => {} | Selection change handler              |  ✅     |
| `children`         | `React.ReactNode[]` |  [] | RadioButton components                                  |  ✅     |
 


### `RadioButton Props`


| Prop            | Type                | Default      |  Description               | Required    |
| --------------- | --------            | ----------   | -------------              | ----------- |
| `label`         | `string`            | ""           | Button Label               |     ✅      |
| `value`         | `string or number`  | "" |         | Option Value               |     ✅    |
| `isDisabled`    | `boolean`           | false        | Disable button             |     ❌     |
| `size`          | `string`            | md           | Button size (sm, md, lg)   |     ❌     |
| `color`         | `string`            | blue         | Button color               |     ❌     |

## Customization

### Custom Styles

```tsx
<Tabs
  tabs={tabs}
  customStyles={{
    container: { backgroundColor: "#f0f0f0" },
    tabActive: { backgroundColor: "#2196F3" },
    tabTextActive: { color: "#fff" },
    content: { padding: 20 },
  }}
/>
```

### Custom Tailwind Classes Example

```tsx
<RadioGroup
  name="options"
  customStyles={{
    container: { backgroundColor: "#f0f0f0" },
    radioButton: { marginBottom: 20 },
  }}
>
  <RadioButton label="Option 1" value="1" />
  <RadioButton label="Option 2" value="2" />
</RadioGroup>
```

## Tailwind Classes

```tsx
<RadioGroup
  name="options"
  className={{
    container: "bg-gray-100 p-4",
    radioButton: "py-2",
  }}
>
  <RadioButton label="Option 1" value="1" />
  <RadioButton label="Option 2" value="2" />
</RadioGroup>
```

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/trend-ui/trendui-react-native/issues) on the repository.

---

## License

This component is licensed under the **MIT License** as part of the TrendUI library.