import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps,
} from "react-native";
import tw from "twrnc";

/**
 * @typedef {Object} CustomTextInputProps
 * @extends {TextInputProps}
 * @property {string} [label] - The label for the input field.
 * @property {string} [placeholder="Enter text"] - The placeholder text for the input field.
 * @property {string} [value] - The value of the input field (controlled input).
 * @property {function} [onChangeText] - Callback function triggered on text change.
 * @property {StyleProp<TextStyle>} [errorStyle] - Custom styles for the error message.
 * @property {"outlined" | "filled" | "standard"} [variant="outlined"] - The style variant for the input field.
 * @property {StyleProp<ViewStyle>} [style] - Custom styles for the input container.
 * @property {StyleProp<TextStyle>} [inputStyle] - Additional styles for the input field.
 * @property {StyleProp<TextStyle>} [labelStyle] - Custom styles for the label text.
 * @property {string} [className] - TailwindCSS classes for the container.
 * @property {string} [inputClassName] - TailwindCSS classes for the input field.
 * @property {boolean} [isPassword=false] - If true, the input is treated as a password field.
 * @property {boolean} [showError=true] - Whether to display the error message.
 * @property {"light" | "dark"} [theme="light"] - The theme mode for the input field.
 * @property {boolean} [multiline=false] - Whether the input supports multiline.
 * @property {"text" | "email" | "password"} [type="text"] - The type of input for validation.
 * @property {number} [minLength] - Minimum character length for validation.
 * @property {number} [maxLength] - Maximum character length for validation.
 */

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  errorStyle?: StyleProp<TextStyle>;
  variant?: "outlined" | "filled" | "standard";
  style?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  className?: string;
  inputClassName?: string;
  isPassword?: boolean;
  showError?: boolean;
  theme?: "light" | "dark";
  multiline?: boolean;
  type?: "text" | "email" | "password";
  minLength?: number;
  maxLength?: number;
}

/**
 * A highly customizable TextInput component for React Native apps.
 *
 * Features:
 * - Theming support (`light` and `dark` modes).
 * - Multiple style variants: `outlined`, `filled`, and `standard`.
 * - Multiline support with automatic height adjustment.
 * - Validation for `email` and `password` types with min/max length.
 * - Integration with TailwindCSS for styling via `className` and `inputClassName`.
 * - Displays error messages dynamically.
 *
 * @param {CustomTextInputProps} props - The properties for the TextInput component.
 * @returns {JSX.Element} The customized TextInput component.
 */
const TextInput: React.FC<CustomTextInputProps> = ({
  label,
  placeholder = "Enter text",
  value = "",
  onChangeText,
  errorStyle,
  variant = "outlined",
  style,
  inputStyle,
  labelStyle,
  className,
  inputClassName,
  isPassword = false,
  showError = true,
  theme = "light",
  multiline = false,
  type = "text",
  minLength,
  maxLength,
  ...props
}) => {
  const [internalError, setInternalError] = useState<string | null>(null);

  const getVariantStyles = (): StyleProp<TextStyle> => {
    switch (variant) {
      case "outlined":
        return styles.outlined;
      case "filled":
        return styles.filled;
      case "standard":
        return styles.standard;
      default:
        return {};
    }
  };

  const validateInput = (text: string) => {
    let validationError = null;

    if (type === "email" && !/^\S+@\S+\.\S+$/.test(text)) {
      validationError = "Invalid email address";
    } else if (type === "password") {
      if (minLength && text.length < minLength) {
        validationError = `Password must be at least ${minLength} characters`;
      } else if (maxLength && text.length > maxLength) {
        validationError = `Password must be less than ${maxLength} characters`;
      }
    }

    setInternalError(validationError);
    onChangeText?.(text);
  };

  const themeStyles = {
    container: theme === "dark" ? styles.darkContainer : {},
    input: theme === "dark" ? styles.darkInput : {},
    label: theme === "dark" ? styles.darkLabel : {},
    errorText: theme === "dark" ? styles.darkErrorText : {},
  };

  return (
    <View
      style={[
        styles.container,
        themeStyles.container,
        className ? tw`${className}` : {},
      ]}
    >
      {label && (
        <Text style={[styles.label, themeStyles.label, labelStyle]}>
          {label}
        </Text>
      )}

      <RNTextInput
        style={[
          styles.input,
          themeStyles.input,
          getVariantStyles(),
          inputClassName ? tw`${inputClassName}` : {},
          inputStyle,
          style,
          multiline ? styles.multilineInput : {}, // Apply multiline styles
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme === "dark" ? "#aaa" : "#666"}
        secureTextEntry={isPassword || type === "password"}
        value={value}
        onChangeText={type !== "text" ? validateInput : onChangeText}
        multiline={multiline}
        {...props}
      />

      {showError && internalError && (
        <Text style={[styles.errorText, themeStyles.errorText, errorStyle]}>
          {internalError}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: "100%",
  },
  label: {
    fontSize: 16,
    paddingBottom: 4,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  multilineInput: {
    minHeight: 100, // Increase height for multiline inputs
    textAlignVertical: "top", // Align text to the top
  },
  outlined: {
    borderColor: "#007bff",
  },
  filled: {
    backgroundColor: "#f1f1f1",
    borderWidth: 0,
  },
  standard: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 0,
    backgroundColor: "transparent",
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "#dc3545",
  },
  darkContainer: {
    padding: 8,
    borderRadius: 4,
  },
  darkInput: {
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "#333",
  },
  darkLabel: {
    color: "#fff",
  },
  darkErrorText: {
    color: "#ff6b6b",
  },
});

export default TextInput;
