# Button Component

The `Button` component is a versatile and customizable button element designed for React Native applications. It supports multiple styles, loading states, and TailwindCSS integration, providing an intuitive and developer-friendly solution for creating interactive buttons.

![Accordion Demo](https://res.cloudinary.com/dvuldqqyp/image/upload/v1737087530/button_nrd2l7.gif)

## Installation
```bash
npx trendui add button
```
---

## Features

- **Variants**: Predefined styles for primary, secondary, danger, and success buttons.
- **Loading State**: Built-in support for showing a loading spinner while disabling the button.
- **Custom Animations**: Optional touch animations for a smoother user experience.
- **TailwindCSS Support**: Use `className` for additional styling with TailwindCSS.
- **Customizable Styles**: Pass custom styles for the button and text.
- **Disabled State**: Automatically adjusts the button appearance when disabled.

---

## Props

| Prop        | Type                                                      | Default    | Description                                                                 |
|-------------|-----------------------------------------------------------|------------|-----------------------------------------------------------------------------|
| `value`     | `string`                                                  | -          | The text to display on the button.                                         |
| `onPress`   | `() => void`                                              | -          | Function to execute when the button is pressed.                            |
| `variant`   | `"primary"`, `"secondary"`, `"danger"`, `"success"`       | `"primary"`| Sets the predefined button style.                                          |
| `loading`   | `boolean`                                                 | `false`    | If `true`, displays a loading spinner and disables the button.             |
| `disabled`  | `boolean`                                                 | `false`    | If `true`, disables the button and adjusts its appearance.                 |
| `animation` | `boolean`                                                 | `true`     | Enables or disables the touch animation.                                   |
| `style`     | `StyleProp<ViewStyle>`                                    | -          | Custom styles for the button container.                                    |
| `textStyle` | `StyleProp<TextStyle>`                                    | -          | Custom styles for the button text.                                         |
| `className` | `string`                                                  | -          | TailwindCSS classes for additional styling.                                |

---

## Usage

### Basic Usage

```tsx
import React from "react";
import { Button } from "@/trendui";

export default function App() {
  return (
    <Button value="Click Me" onPress={() => alert("Button Pressed!")} />
  );
}
```

---

## Button Variants

```tsx
<Button value="Primary" variant="primary" onPress={() => {}} />
<Button value="Secondary" variant="secondary" onPress={() => {}} />
<Button value="Danger" variant="danger" onPress={() => {}} />
<Button value="Success" variant="success" onPress={() => {}} />
```

---

## Loading State

```tsx
<Button value="Loading..." loading onPress={() => {}} />
```

---

## Disabled State

```tsx
<Button value="Disabled" disabled onPress={() => {}} />
```

---

## Custom Styling

```tsx
<Button
  value="Custom Button"
  style={{ backgroundColor: "purple", borderRadius: 10 }}
  textStyle={{ fontSize: 18, fontWeight: "bold" }}
  onPress={() => {}}
/>
```

---

## TailwindCSS Styling

```tsx
<Button
  value="Tailwind Button"
  className="bg-blue-500 p-4 rounded-lg"
  onPress={() => {}}
/>
```

---

## Customization

### Adding More Variants

You can extend the `getVariantStyles` function in the source code to define additional button styles.

---

## Support

If you have any issues or suggestions, please [open an issue](https://github.com/trend-ui/trendui-react-native/issues) in the repository.

---

## License

This component is part of the TrendUI library and is licensed under the **MIT License**.