# Avatar Component

The `Avatar` component is a customizable React Native component designed to display a user's profile picture or fallback initials. It supports various shapes, sizes, themes, and advanced styling options.

---

## 📦 Installation

Since the `Avatar` component is part of your library, you can add it via your library's CLI:

```bash
npx trendui add avatar
```

---

## ✨ Features

- **Image Support**: Display an avatar using a URL or local image source.
- **Fallback Initials**: Automatically show user initials if no image is provided.
- **Shape Options**: Choose between `circle` and `square` shapes.
- **Theming**: Light and dark theme support for fallback initials.
- **Customizable**: Fully customizable styles via `customStyles` and `className`.

---

## 🔧 Props

| Prop            | Type                  | Default     | Description                                                     |
|------------------|-----------------------|-------------|-----------------------------------------------------------------|
| `source`        | `string`              | `undefined` | URL or local path to display an avatar image.                   |
| `initials`      | `string`              | `undefined` | Fallback initials if the `source` is unavailable.              |
| `size`          | `number`              | `50`        | Diameter or size of the avatar in pixels.                      |
| `shape`         | `"circle" \| "square"`| `"circle"`  | Shape of the avatar.                                           |
| `theme`         | `"light" \| "dark"`   | `"light"`   | Theme for fallback initials (`light` or `dark`).               |
| `customStyles`  | `object`              | `{}`        | Custom styles for the container, image, and initials.          |
| `className`     | `object`              | `{}`        | Tailwind classes for styling the container, image, and initials.|

---

## 🚀 Usage

### Basic Usage
```tsx
import React from "react";
import { Avatar } from "@/trendui";

const App = () => {
  return (
    <Avatar source="https://example.com/avatar.jpg" size={80} />
  );
};

export default App;
```

### Using Fallback Initials
```tsx
<Avatar initials="AB" size={60} theme="dark" />
```

### Customizing Shape
```tsx
<Avatar initials="XY" shape="square" size={70} />
```

### Advanced Styling
```tsx
<Avatar
  initials="JD"
  size={100}
  theme="light"
  customStyles={{
    container: { backgroundColor: "#FF5733" },
    initials: { fontSize: 24, color: "#FFF" },
  }}
  className={{
    container: "border-2 border-blue-500",
    initials: "text-lg font-bold",
  }}
/>
```

---

## 🛠 Customization

### Custom Styles
Use the `customStyles` prop to pass an object of styles for specific parts of the component:

- `container`: Style for the outer container.
- `image`: Style for the avatar image.
- `initials`: Style for the initials fallback.

### TailwindCSS Support
Add TailwindCSS classes to specific parts of the component using the `className` prop:

```tsx
<Avatar
  initials="LM"
  className={{
    container: "bg-teal-500 border border-white",
    initials: "text-white font-semibold",
  }}
/>
```

---

## 💬 Support

For any issues or feature requests, please [open an issue](https://github.com/trendui/react-native/issues) in the repository.

---

## 🛡 License

The Avatar component is licensed under the **MIT License** as part of the TrendUI library.

---