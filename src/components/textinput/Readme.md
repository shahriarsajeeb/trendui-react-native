# TextInput Component

The `TextInput` component is a powerful, flexible, and customizable text input field for React Native. It supports advanced theming, multiple variants, and built-in validation for common input types.

---

## Installation

```bash
npx trendui add textinput
```

--- 

## Features

- **Multiple Variants**: Choose from `outlined`, `filled`, or `standard` styles.
- **Dark and Light Themes**: Fully supports theming with `dark` and `light` modes.
- **Validation**: Built-in validation for `email`, `password`, and custom lengths.
- **Multiline Support**: Easily handle long-form inputs with auto-adjusting height.
- **Error Handling**: Display dynamic error messages for validation errors.
- **Password Field**: Secure text entry with `isPassword` mode.
- **TailwindCSS Integration**: Supports styling via `className` and `inputClassName`.

---

## Props

| Prop             | Type                                | Default           | Description                                                                 |
|-------------------|-------------------------------------|-------------------|-----------------------------------------------------------------------------|
| `label`          | `string`                           | `undefined`       | Label text for the input field.                                             |
| `placeholder`    | `string`                           | `"Enter text"`    | Placeholder text for the input field.                                       |
| `value`          | `string`                           | `""`              | Controlled value of the input field.                                        |
| `onChangeText`   | `(text: string) => void`           | `undefined`       | Callback triggered on text change.                                          |
| `errorStyle`     | `StyleProp<TextStyle>`             | `undefined`       | Custom styles for the error message.                                        |
| `variant`        | `"outlined" | "filled" | "standard"` | `"outlined"`       | Input field style variant.                                                  |
| `style`          | `StyleProp<TextStyle>`             | `undefined`       | Custom styles for the container.                                            |
| `inputStyle`     | `StyleProp<TextStyle>`             | `undefined`       | Additional styles for the input field.                                      |
| `labelStyle`     | `StyleProp<TextStyle>`             | `undefined`       | Custom styles for the label text.                                           |
| `className`      | `string`                           | `undefined`       | TailwindCSS classes for the container.                                      |
| `inputClassName` | `string`                           | `undefined`       | TailwindCSS classes for the input field.                                    |
| `isPassword`     | `boolean`                          | `false`           | Enables secure text entry for password inputs.                              |
| `showError`      | `boolean`                          | `true`            | Toggles the display of error messages.                                      |
| `theme`          | `"light" | "dark"`                 | `"light"`         | Theme for the input field.                                                  |
| `multiline`      | `boolean`                          | `false`           | Enables multiline text input.                                               |
| `type`           | `"text" | "email" | "password"`    | `"text"`          | Input type for validation.                                                  |
| `minLength`      | `number`                           | `undefined`       | Minimum length for input validation.                                        |
| `maxLength`      | `number`                           | `undefined`       | Maximum length for input validation.                                        |

---

## Usage

### Basic Example

```tsx
import React from "react";
import { TextInput } from "@/trendui";

export default function App() {
  return (
    <TextInput
      label="Email"
      placeholder="Enter your email"
      type="email"
      value=""
      onChangeText={(text) => console.log(text)}
    />
  );
}
```

---

## Variants

Use different styles by setting the `variant` prop.

```tsx
<TextInput label="Standard" variant="standard" />
<TextInput label="Filled" variant="filled" />
<TextInput label="Outlined" variant="outlined" />
```

---

## Dark Mode

Easily enable dark mode by setting the `theme` prop to `"dark"`.

```tsx
<TextInput
  label="Dark Mode Input"
  placeholder="Type here..."
  theme="dark"
/>
```

---

## Multiline Input

Support multiline text input by setting `multiline` to `true`.

```tsx
<TextInput
  label="Comments"
  placeholder="Write your feedback..."
  multiline
/>
```

---

## Validation

Enable validation for email and password fields, along with custom length limits.

```tsx
<TextInput
  label="Email"
  type="email"
  value=""
  onChangeText={(text) => console.log(text)}
/>

<TextInput
  label="Password"
  type="password"
  minLength={8}
  maxLength={16}
/>
```

---

## Error Handling

Display dynamic error messages for validation issues. You can style the error text using `errorStyle`.

```tsx
<TextInput
  label="Username"
  type="text"
  value="TooShort"
  minLength={8}
  showError
/>
```

---

## TailwindCSS Integration

Style the input using TailwindCSS classes.

```tsx
<TextInput
  label="Styled Input"
  placeholder="Type something..."
  className="bg-gray-100"
  inputClassName="rounded-lg shadow"
/>
```

---

## 🛠 Customization

You can extend the component with additional styles or logic for more complex use cases. For example, adding custom validation rules or new variants.

---

## 💬 Support

If you encounter issues or have suggestions, feel free to [open an issue](https://github.com/trendui/react-native/issues) on our GitHub repository.

---

## 🛡 License

This component is licensed under the **MIT License** as part of the TrendUI library.