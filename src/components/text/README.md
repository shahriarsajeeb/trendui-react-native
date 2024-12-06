## Text Component

The `Text` component is a customizable text element that supports responsive font sizes, thematic styling, and TailwindCSS integration for React Native applications.

### Props

- **value** (`string`): The text content to display.
- **size** (`"lg" | "xl" | "2xl" | "3xl" | number`): Optional. Specifies the size of the text. Can be one of the predefined sizes (`lg`, `xl`, `2xl`, `3xl`) or a numeric value for custom sizes.
- **className** (`string`): Optional. TailwindCSS utility classes for additional styling.
- **variant** (`"label" | "title" | "header" | "paragraph" | "baseText"`): Optional. Use to apply predefined styles that correspond to common text types.
- **theme** (`'light' | 'dark'`): Optional. Specifies the theme, with `light` being the default. This affects the text color based on the selected theme.

### Example Usage

```jsx
<Text
  value="Welcome to trendUI"
  variant="header"
  className="text-4xl text-center py-4"
  fontWeight="600"
  theme="light"
/>
```
