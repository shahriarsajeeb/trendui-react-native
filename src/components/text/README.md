# Text Component

The `Text` component is a highly customizable and responsive text element designed for React Native applications. It supports theming, TailwindCSS classes, and responsive font sizes to provide a seamless and scalable typography solution.

---

## 📦 Installation
```bash
npx trendui add text
```
---

## ✨ Features

- **Customizable Font Sizes**: Supports predefined sizes (`lg`, `xl`, `2xl`, `3xl`) or custom numeric values.
- **Variants**: Predefined styles (`label`, `title`, `header`, `paragraph`, `baseText`) for different use cases.
- **Theming**: Built-in light and dark theme support.
- **Font Weight Control**: Allows precise control over font weights (`normal`, `bold`, `100`–`900`).
- **TailwindCSS Support**: Use `className` for additional styling with TailwindCSS.
- **Responsive Design**: Integrates with `responsiveFontSize` for adaptive typography.

## 🔧 Props

| Prop        | Type                                                                         | Default  | Description                                                                                       |
|-------------|------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------|
| `value`     | `string`                                                                     | -        | The text to display.                                                                              |
| `size`      | `"lg"`, `"xl"`, `"2xl"`, `"3xl"`, `number`                                   | -        | Sets the font size.                                                                               |
| `className` | `string`                                                                     | -        | TailwindCSS classes for additional styling.                                                      |
| `variant`   | `"label"`, `"title"`, `"header"`, `"paragraph"`, `"baseText"`                | -        | Predefined styles for specific text types.                                                       |
| `theme`     | `"light"`, `"dark"`                                                         | `"light"`| Theme mode for the text color.                                                                    |
| `fontWeight`| `"normal"`, `"bold"`, `"100"`–`"900"`                                       | -        | Sets the font weight.                                                                             |
| `...props`  | [React Native `TextProps`](https://reactnative.dev/docs/text#props)          | -        | Any additional props supported by React Native's `Text` component.                               |

---

## 🚀 Usage

### Basic Usage

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <Text value="Hello, World!" size="xl" theme="dark" fontWeight="bold" />
  );
}
```

---

### Using Variants

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <>
      <Text value="Label" variant="label" />
      <Text value="Title" variant="title" />
      <Text value="Header" variant="header" />
      <Text value="This is a paragraph." variant="paragraph" />
    </>
  );
}
```

---

### TailwindCSS Styling

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <Text
      value="Styled Text"
      size="lg"
      className="text-center text-red-500"
    />
  );
}
```

---

### Custom Font Size

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <Text value="Custom Size Text" size={32} fontWeight="600" />
  );
}
```

---

## 🛠 Customization

### Theming

The `Text` component adapts to light and dark themes using the `theme` prop.

```tsx
<Text value="Light Theme" theme="light" />
<Text value="Dark Theme" theme="dark" />
```

---

### Adding More Variants

You can extend the `variants` object in the source code to define additional styles.

---

## 📘 Utilities

### Responsive Font Size

The `responsiveFontSize` utility adjusts font sizes based on screen dimensions, ensuring consistency across devices.

---

## 💬 Support

If you have any issues or suggestions, please [open an issue](https://github.com/trendui/react-native/issues) in the repository.

---

## 🛡 License

This component is part of the TrendUI library and is licensed under the **MIT License**.