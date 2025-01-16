# Accordion Component

A reusable, customizable, and lightweight Accordion component for React Native with support for light and dark themes. This component allows you to create collapsible sections with ease.

---

## Installation
```bash
npx trendui add accordion
```
---

## Features

- Fully customizable styles through `customStyles` and `className`.
- Support for light and dark themes.
- Simple toggle functionality for expanding and collapsing sections.
- Built-in styling for a clean and modern look.

---

## Usage

Here’s how you can use the Accordion component in your project:

```tsx
import React from "react";
import { View } from "react-native";
import Accordion from "@/trendui";

const App = () => {
  const sections = [
    { title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
    { title: "Is it styled?", content: "Yes. It comes with default styles that match other components' aesthetic." },
    { title: "Is it animated?", content: "Yes. It's animated by default, but you can disable it if you prefer." },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Accordion sections={sections} theme="light" />
    </View>
  );
};

export default App;
```

---

## Props

### Required Props

| Prop       | Type                                              | Description                                           |
|------------|---------------------------------------------------|-------------------------------------------------------|
| `sections` | `Array<{ title: string; content: string; }>`      | Array of objects containing the title and content for each accordion section. |

### Optional Props

| Prop           | Type                | Default     | Description                                                                                           |
|----------------|---------------------|-------------|-------------------------------------------------------------------------------------------------------|
| `style`        | `ViewStyle`         | `undefined` | Custom styles for the overall container.                                                             |
| `className`    | `string`            | `undefined` | Tailwind CSS classes for the overall container.                                                      |
| `theme`        | `"light" | "dark"` | `"light"`   | Sets the theme of the Accordion component.                                                           |
| `customStyles` | `Object`            | `{}`        | Custom styles for specific parts of the Accordion, such as `container`, `section`, `trigger`, etc.    |

---

## Customization

You can customize the component using the `customStyles` prop, which allows you to override styles for specific parts of the Accordion:

### `customStyles` Object

| Key             | Type        | Description                                             |
|------------------|-------------|---------------------------------------------------------|
| `container`      | `ViewStyle` | Custom style for the overall container.                |
| `section`        | `ViewStyle` | Custom style for each section of the Accordion.        |
| `trigger`        | `ViewStyle` | Custom style for the header of each section.           |
| `triggerActive`  | `ViewStyle` | Custom style for the active header of a section.       |
| `content`        | `ViewStyle` | Custom style for the content area of each section.     |
| `title`          | `TextStyle` | Custom style for the title text in the header.         |
| `titleActive`    | `TextStyle` | Custom style for the title text in an active section.  |
| `contentText`    | `TextStyle` | Custom style for the text inside the content area.     |

Example of using `customStyles`:

```tsx
<Accordion
  sections={sections}
  theme="dark"
  customStyles={{
    container: { margin: 10 },
    trigger: { backgroundColor: "#333" },
    title: { fontSize: 18, fontWeight: "bold" },
    content: { backgroundColor: "#222" },
    contentText: { color: "#FFF" },
  }}
/>
```

---

## Themes

The Accordion supports two themes: `light` and `dark`. By default, it uses the `light` theme. You can specify the theme using the `theme` prop.

Example:

```tsx
<Accordion sections={sections} theme="dark" />
```

---

## Contributing

If you’d like to contribute to this component, feel free to fork the repository, create a feature branch, and submit a pull request. Contributions are always welcome!

---

## License

This component is open-source and available under the MIT License.

---

## Example Preview

### Light Theme:
<img src="./light-theme-preview.png" alt="Light Theme Preview" width="300" />

### Dark Theme:
<img src="./dark-theme-preview.png" alt="Dark Theme Preview" width="300" />

---

## Feedback

For issues or feature requests, feel free to open an issue in the repository or contact the maintainer.