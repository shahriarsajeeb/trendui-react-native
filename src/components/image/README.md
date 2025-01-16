# Image Component

The `Image` component is a highly customizable, lightweight, and animated image viewer for React Native. It includes error handling and supports TailwindCSS integration for styling.

---

## Installation

```bash
npx trendui add image
```

---

## Features

- **Fade-In Animation**: Images fade in smoothly upon loading.
- **Error Handling**: Displays a fallback text when the image fails to load.
- **Customizable Dimensions**: Easily set width and height.
- **Styling Options**: Supports inline styles and TailwindCSS classes.
- **Performance-Optimized**: Leverages `Animated` for smooth transitions.


## Props

| Prop         | Type                     | Default           | Description                                                              |
|--------------|--------------------------|-------------------|--------------------------------------------------------------------------|
| `src`        | `string`                 | **Required**      | URL of the image to display.                                             |
| `alt`        | `string`                 | `"Failed to load"`| Alternative text shown if the image fails to load.                       |
| `width`      | `number`                 | **Required**      | Desired width of the image.                                              |
| `height`     | `number`                 | **Required**      | Desired height of the image.                                             |
| `blurRadius` | `number`                 | `10`              | Radius of the blur effect (not yet implemented in this version).         |
| `style`      | `StyleProp<ImageStyle>`  | `undefined`       | Additional custom styles for the image.                                  |
| `className`  | `string`                 | `undefined`       | TailwindCSS classes for styling.                                         |

---

## Usage

### Basic Usage

```tsx
import React from "react";
import { Image } from "@/trendui";

export default function App() {
  return (
    <Image
      src="https://example.com/image.jpg"
      alt="A beautiful scenery"
      width={300}
      height={200}
    />
  );
}
```

---

### Error Handling

If the image fails to load, the `alt` text is displayed. You can customize the `alt` prop for better fallback messaging.

```tsx
<Image
  src="https://invalid-url.com/image.jpg"
  alt="Image failed to load"
  width={300}
  height={200}
/>
```

---

### Custom Styles

You can pass additional styles through the `style` prop or use TailwindCSS classes with `className`.

```tsx
<Image
  src="https://example.com/image.jpg"
  alt="Styled image"
  width={300}
  height={200}
  style={{ borderRadius: 10, borderWidth: 2, borderColor: "#000" }}
  className="shadow-lg"
/>
```

---

### Fade-In Animation

The component includes a built-in fade-in animation when the image loads successfully. No additional configuration is required.

---

### TailwindCSS Integration

To style the image using TailwindCSS classes, use the `className` prop:

```tsx
<Image
  src="https://example.com/image.jpg"
  alt="Image with Tailwind styles"
  width={300}
  height={200}
  className="rounded-lg border border-gray-300"
/>
```

---

## Customization

### Adding Blur Effect

The `blurRadius` prop is available but currently not implemented. To implement, modify the component to apply a blur effect during loading.

---

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/trendui/react-native/issues) on the repository.

---

## License

This component is licensed under the **MIT License** as part of the TrendUI library.