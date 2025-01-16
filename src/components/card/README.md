# Card Component

The **Card** component is a versatile and customizable component for displaying content, supporting themes, background images, overlays, and content styling.

---

## Installation
```bash
npx trendui add card
```
---

## Features

- **Customizable Themes:** Light and dark themes supported.
- **Background Images:** Add an image with an overlay to your card.
- **Flexible Layout:** Includes header, content, and footer sections.
- **Custom Styling:** Use `customStyles` and `className` props for styling flexibility.
- **Background Color:** Apply a custom background color with the `backgroundColor` prop.

---

## Props

| Prop           | Type              | Default              | Description                                                                |
| -------------- | ----------------- | -------------------- | -------------------------------------------------------------------------- |
| `title`        | `string`          | `undefined`          | Title text for the card.                                                   |
| `subtitle`     | `string`          | `undefined`          | Subtitle text for the card.                                                |
| `image`        | `string`          | `undefined`          | URL of the background image for the card.                                  |
| `overlayColor` | `string`          | `rgba(0, 0, 0, 0.5)` | Overlay color applied over the background image.                           |
| `borderRadius` | `number`          | `16`                 | Border radius for the card.                                                |
| `footer`       | `React.ReactNode` | `undefined`          | Optional footer content for the card.                                      |
| `children`     | `React.ReactNode` | `undefined`          | Main content inside the card.                                              |
| `theme`        | `light`           | `dark`               | Theme for the card.                                                        |
| `customStyles` | `object`          | `{}`                 | Custom styles for `container`, `header`, `content`, `footer`, and `image`. |
| `className`    | `object`          | `{}`                 | Tailwind classes for `container`, `header`, `content`, and `footer`.       |

---

## Usage

### Basic Example

```tsx
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "@/trendui";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Simple Card */}
      <Card>
        <Text style={styles.text}>This is a simple card.</Text>
      </Card>

      {/* Card with Image */}
      <Card
        image="https://img.freepik.com/free-vector/gradient-pink-green-background_52683-110638.jpg?t=st=1736940216~exp=1736943816~hmac=4b4ca269a02b13bbfa833b20f1c4a57aa2fdc4f38310479ee3623971d64bca40&w=1800"
        overlayColor="rgba(0, 0, 0, 0.3)"
        title="Pre-Order Pokémon TCG Pocket"
        subtitle="COMING SOON"
        footer={
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pre-Order</Text>
          </TouchableOpacity>
        }
      ></Card>

      {/* Card with Footer */}
      <Card
        title="Essential Apps"
        overlayColor="rgba(0, 0, 0, 0.3)"
        className={{
          content: "bg-white",
        }}
        footer={<Text style={styles.footer}>Get these apps today!</Text>}
      >
        <View>
          <Text style={styles.text}>Your essential social apps.</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    fontSize: 14,
    color: "#007BFF",
  },
  contentText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#1877F2",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default App;
```

---

## License

This component is open-source and free to use in any project.

---
