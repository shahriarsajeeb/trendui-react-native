# Tabs Component

A flexible and reusable tabbed navigation component for React Native. Supports light and dark themes, custom animations, and highly customizable styles and classNames.

![Tabs Demo](https://res.cloudinary.com/dvuldqqyp/image/upload/v1737093929/Untitled_design_1_umhciw.gif)

## Installation

```bash
npx trendui add tabs
```

---

## Features

- **Light and Dark Themes**: Built-in support for light and dark themes.
- **Animation**: Smooth fade-in animation when switching tabs (optional).
- **Customization**: Easily customize styles and classes for every part of the component.
- **Accessibility**: Designed to work across various screen sizes and themes.

## Usage

Here’s a basic example of how to use the `Tabs` component:

```tsx
import React from "react";
import { Tabs, Text } from "@/trendui";

const App = () => {
  const tabs = [
    { label: "Tab 1", content: <Text>Content for Tab 1</Text> },
    { label: "Tab 2", content: <Text>Content for Tab 2</Text> },
    { label: "Tab 3", content: <Text>Content for Tab 3</Text> },
  ];

  return (
    <Tabs
      tabs={tabs}
      initialTabIndex={0}
      theme="light"
      enableAnimation={true}
      customStyles={{
        tabActive: { backgroundColor: "#ff5722" },
        tabTextActive: { color: "#ffffff" },
      }}
    />
  );
};

export default App;
```

## Props

### TabsProps

| Prop              | Type      | Default  | Description                                                   |
| ----------------- | --------- | -------- | ------------------------------------------------------------- |
| `tabs`            | `Tab[]`   | Required | Array of tabs with `label` and `content`.                     |
| `initialTabIndex` | `number`  | `0`      | Index of the initially active tab.                            |
| `theme`           | `light`   | `dark`   | Theme for the component (by default light)                    |
| `enableAnimation` | `boolean` | `true`   | Enables fade-in animation on tab switch.                      |
| `customStyles`    | `object`  | `{}`     | Custom styles for various parts of the component (see below). |
| `className`       | `object`  | `{}`     | Custom Tailwind class names for styling (see below).          |

### `Tab`

| Property  | Type              | Description                    |
| --------- | ----------------- | ------------------------------ |
| `label`   | `string`          | The label for the tab.         |
| `content` | `React.ReactNode` | Content displayed for the tab. |

### `customStyles`

| Style Key       | Type        | Description                         |
| --------------- | ----------- | ----------------------------------- |
| `container`     | `ViewStyle` | Style for the outer container.      |
| `tabContainer`  | `ViewStyle` | Style for the tab header container. |
| `tab`           | `ViewStyle` | Style for each tab.                 |
| `tabActive`     | `ViewStyle` | Style for the active tab.           |
| `tabText`       | `TextStyle` | Style for the tab text.             |
| `tabTextActive` | `TextStyle` | Style for the active tab text.      |
| `content`       | `ViewStyle` | Style for the content area.         |

### `className`

| Class Key       | Type     | Description                                       |
| --------------- | -------- | ------------------------------------------------- |
| `container`     | `string` | Tailwind class name for the outer container.      |
| `tabContainer`  | `string` | Tailwind class name for the tab header container. |
| `tab`           | `string` | Tailwind class name for each tab.                 |
| `tabActive`     | `string` | Tailwind class name for the active tab.           |
| `content`       | `string` | Tailwind class name for the content area.         |
| `tabText`       | `string` | Tailwind class name for the tab text.             |
| `tabTextActive` | `string` | Tailwind class name for the active tab text.      |

## Customization

### Custom Styles Example

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
<Tabs
  tabs={tabs}
  className={{
    container: "bg-gray-100",
    tabActive: "bg-blue-500",
    tabTextActive: "text-white",
    content: "p-4",
  }}
/>
```

## Theming

Switch between light and dark themes using the `theme` prop.

```tsx
<Tabs tabs={tabs} theme="dark" />
```

## Animations

Enable or disable animations using the `enableAnimation` prop.

```tsx
<Tabs tabs={tabs} enableAnimation={false} />
```

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/trend-ui/trendui-react-native/issues) on the repository.

---

## License

This component is licensed under the **MIT License** as part of the TrendUI library.