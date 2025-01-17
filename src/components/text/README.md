# Text Component

The `Text` component is a highly customizable and responsive text element designed for React Native applications. It supports theming, TailwindCSS classes, and responsive font sizes to provide a seamless and scalable typography solution.

![Text Demo](https://res.cloudinary.com/dvuldqqyp/image/upload/v1737094758/Untitled_design_ggvxja.gif)

---

## Installation

```bash
npx trendui add text
```

## Features

- **Customizable Font Sizes**: Supports predefined sizes (`lg`, `xl`, `2xl`, `3xl`) or custom numeric values.
- **Variants**: Predefined styles (`label`, `title`, `header`, `paragraph`, `baseText`) for different use cases.
- **Theming**: Built-in light and dark theme support.
- **Font Weight Control**: Allows precise control over font weights (`normal`, `bold`, `100`–`900`).
- **TailwindCSS Support**: Use `className` for additional styling with TailwindCSS.
- **Responsive Design**: Integrates with `responsiveFontSize` for adaptive typography.

## Props

| Prop         | Type                                                                | Default   | Description                                                        |
| ------------ | ------------------------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| `value`      | `string`                                                            | -         | The text to display.                                               |
| `size`       | `"lg"`, `"xl"`, `"2xl"`, `"3xl"`, `number`                          | -         | Sets the font size.                                                |
| `className`  | `string`                                                            | -         | TailwindCSS classes for additional styling.                        |
| `variant`    | `"label"`, `"title"`, `"header"`, `"paragraph"`, `"baseText"`       | -         | Predefined styles for specific text types.                         |
| `theme`      | `"light"`, `"dark"`                                                 | `"light"` | Theme mode for the text color.                                     |
| `fontWeight` | `"normal"`, `"bold"`, `"100"`–`"900"`                               | -         | Sets the font weight.                                              |
| `...props`   | [React Native `TextProps`](https://reactnative.dev/docs/text#props) | -         | Any additional props supported by React Native's `Text` component. |

---

## Usage

### Basic Usage

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <Text size="xl" theme="dark" fontWeight="bold">
      Hello, World!
    </Text>
  );
}
```

---

## Using Variants

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <>
      <Text variant="label">Label</Text>
      <Text variant="title">Title</Text>
      <Text variant="header">Header</Text>
      <Text variant="paragraph">This is a paragraph.</Text>
    </>
  );
}
```

---

## TailwindCSS Styling

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <Text size="lg" className="text-center text-red-500">
      Styled Text
    </Text>
  );
}
```

---

## Custom Font Size

```tsx
import React from "react";
import { Text } from "@/trendui";

export default function App() {
  return (
    <Text size={32} fontWeight="600">
      Custom Size Text
    </Text>
  );
}
```

---

## Customization

### Theming

The `Text` component adapts to light and dark themes using the `theme` prop.

```tsx
<Text theme="light">
  Light Theme
</Text>
<Text theme="dark">
  Dark Theme
</Text>
```

---

### Adding More Variants

You can extend the `variants` object in the source code to define additional styles.

---

## Utilities

### Responsive Font Size

The `responsiveFontSize` utility adjusts font sizes based on screen dimensions, ensuring consistency across devices.

---

## Support

If you have any issues or suggestions, please [open an issue](https://github.com/trend-ui/trendui-react-native/issues) in the repository.

---

## License

This component is part of the TrendUI library and is licensed under the **MIT License**.
