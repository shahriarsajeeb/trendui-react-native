# Button Component

The `Button` component is a customizable and versatile UI element designed for React Native applications. It integrates TailwindCSS for styling and offers advanced features like loading states, theming, and animation toggling.

---

## Features

- **Variants**: Predefined styles for primary, secondary, danger, and success buttons.
- **Loading State**: Displays a loading spinner when `loading` is set to `true`.
- **TailwindCSS Integration**: Easily style the button using `className`.
- **Custom Styling**: Additional custom styles can be applied using `style` and `textStyle`.
- **Animation Control**: Enable or disable button press animations with the `animation` prop.
- **Accessibility**: Fully accessible button for enhanced usability.

---

## Props

| Prop Name   | Type                   | Default     | Description                                                            |
| ----------- | ---------------------- | ----------- | ---------------------------------------------------------------------- | ---------- | ----------- | -------------------------------- |
| `value`     | `string`               | Required    | The text to display on the button.                                     |
| `onPress`   | `() => void`           | Required    | The callback function to execute when the button is pressed.           |
| `variant`   | `"primary"             | "secondary" | "danger"                                                               | "success"` | `"primary"` | The style variant of the button. |
| `loading`   | `boolean`              | `false`     | If `true`, displays a loading spinner and disables the button.         |
| `disabled`  | `boolean`              | `false`     | If `true`, disables the button.                                        |
| `animation` | `boolean`              | `true`      | If `true`, enables the default press animation; disables it otherwise. |
| `className` | `string`               | `""`        | TailwindCSS classes for styling the button.                            |
| `style`     | `StyleProp<ViewStyle>` | `undefined` | Additional styles for the button container.                            |
| `textStyle` | `StyleProp<TextStyle>` | `undefined` | Additional styles for the button text.                                 |

---

## Installation

To use the `Button` component, ensure you have the necessary dependencies like `twrnc` for TailwindCSS integration in your project.

1. Install the required package for TailwindCSS in React Native:

   ```bash
   npm install twrnc
   ```

## Usage

Here's how to use the Button component:

```bash
import React from "react";
import { Button } from "./path-to-your-button";

const App = () => {
  return (
    <Button
      value="Submit"
      variant="primary"
      onPress={() => console.log("Button Pressed")}
      className="mt-4 h-[13] mx-4"
      loading={false}
      textStyle={{ fontSize: 25 }}
    />
  );
};

export default App;
```

## Examples

# Primary Button

```bash
<Button
  value="Submit"
  variant="primary"
  onPress={() => console.log("Primary Button Pressed")}
/>
```

# Loading State

```bash
<Button
  value="Loading..."
  variant="secondary"
  loading={true}
  disabled={true}
/>
```

# Danger Button with Custom Styles

```bash
<Button
  value="Delete"
  variant="danger"
  onPress={() => console.log("Danger Button Pressed")}
  className="p-4"
  textStyle={{ fontSize: 20 }}
/>
```

# Animation Disabled

```bash
<Button
  value="No Animation"
  variant="success"
  onPress={() => console.log("No Animation")}
  animation={false}
/>
```

# Styling with TailwindCSS

```bash
<Button
  value="Custom Styled Button"
  variant="primary"
  className="bg-indigo-500 rounded-lg"
  style={{ paddingVertical: 15 }}
/>
```

# Accessibility

The `Button` component is built with accessibility in mind, ensuring proper interaction and feedback for users across all devices.
