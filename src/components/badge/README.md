# Badge Component

The `Badge` component is a versatile notification bubble that can be used alongside icons, images, or text to indicate statuses, notifications, or counts.

![Accordion Demo](https://res.cloudinary.com/dvuldqqyp/image/upload/v1737087224/final_lwd6nz.gif)

## Installation
```bash
npx trendui add badge
```
---

## Props

| Prop           | Type                     | Default       | Description                                                                 |
| -------------- | ------------------------ | ------------- | --------------------------------------------------------------------------- |
| `value`        | `string` | `0`        | The value displayed inside the badge (e.g., notification count).   |             |
| `color`        | `string`                 | `"#FF0000"`   | Background color for the badge.                                             |
| `textColor`    | `string`                 | `"#FFF"`      | Text color for the badge content.                                           |
| `position`     | `"top-left" \| "top-right" \| "bottom-left" \| "bottom-right"` | `"top-right"` | The position of the badge relative to its children.                         |
| `size`         | `"small" \| "medium" \| "large"` | `"medium"`   | Badge size that affects its dimensions and font size.                       |
| `customStyles` | `object`                 | `{}`          | Custom styles for the badge container and text.                             |
| `className`    | `object`                 | `{}`          | Tailwind-style className support for container and text.                    |
| `children`     | `React.ReactNode`        | `undefined`   | The component around which the badge is wrapped (e.g., icons, buttons).     |

---

## Usage

Below is a detailed usage guide for the `Badge` component, including examples of integration with icons and custom styles.

### Example

```tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Badge } from "@/trendui";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Badge with Notification Icon */}
      <Badge value="9+" size="large">
        <MaterialIcons name="notifications" size={36} color="#555" />
      </Badge>

      {/* Badge with Text */}
      <Badge value="3" size="small" color="#007BFF">
        <View style={styles.textContainer}>
          <MaterialIcons name="email" size={40} color="#555" />
        </View>
      </Badge>

      {/* Custom Styled Badge */}
      <Badge
        value="99+"
        size="large"
        color="#FFC107"
        textColor="#000"
        position="bottom-left"
      >
        <MaterialIcons name="shopping-cart" size={40} color="#555" />
      </Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    gap: 20,
  },
  textContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#EEE",
  },
});

export default App;
```

---

## Styling with `className`

The `Badge` component supports Tailwind-style className for quick customization.

```tsx
<Badge
  value="5"
  size="medium"
  className={{
    container: "bg-blue-500 w-[24px] h-[24px] top-[-8px] right-[-8px]",
    text: "text-[14px] font-bold",
  }}
>
  <MaterialIcons name="notifications" size={36} color="#555" />
</Badge>
```

## Customization Options

- Use the `size` prop to change the badge size (`small`, `medium`, `large`).
- Adjust `position` to place the badge on any corner of its container.
- Apply Tailwind styles with `className` for granular customization.

## Support

For any issues or feature requests, please [open an issue](https://github.com/trend-ui/trendui-react-native/issues) in the repository.

---

## License

The Badge component is licensed under the **MIT License** as part of the TrendUI library.
