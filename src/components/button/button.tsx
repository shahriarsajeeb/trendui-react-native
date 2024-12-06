import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import tw from "twrnc";

/**
 * @typedef ButtonProps
 * Extends TouchableOpacity's props to include additional properties for customization.
 * @property {string} value - The text to display on the button.
 * @property {"primary" | "secondary" | "danger" | "success"} variant - Optional. Predefined button styles.
 * @property {boolean} loading - If true, displays an activity indicator and disables the button.
 * @property {string} className - Optional. TailwindCSS classes for styling.
 * @property {boolean} animation - If true, enables the default touch animation.
 */
interface ButtonProps {
  value: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger" | "success";
  loading?: boolean;
  disabled?: boolean;
  animation?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  className?: string;
}

/**
 * A customizable Button component that integrates with TailwindCSS and supports theming.
 *
 * @param {ButtonProps} props - The properties passed to the button component.
 * @returns {JSX.Element} - The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({
  value,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  animation = true, // Default is true, so animation is enabled by default
  style,
  textStyle,
  className,
}) => {
  const getVariantStyles = (): StyleProp<ViewStyle> => {
    switch (variant) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      case "danger":
        return styles.dangerButton;
      case "success":
        return styles.successButton;
      default:
        return {};
    }
  };

  // Convert Tailwind classes to a React Native style object
  const tailwindStyles: StyleProp<ViewStyle> = className
    ? tw`${className}`
    : {};

  // Combine styles and ensure all conform to StyleProp<ViewStyle>
  const buttonStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    styles.button,
    getVariantStyles(),
    tailwindStyles,
    style,
    disabled || loading ? styles.disabledButton : {},
  ]);

  const textStyles: StyleProp<TextStyle> = StyleSheet.flatten([
    styles.buttonText,
    textStyle,
    tw`text-white`, // A default Tailwind class for text color
  ]);

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={animation ? 0.7 : 1} // Animation enabled when true
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={textStyles}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#007bff",
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
  },
  dangerButton: {
    backgroundColor: "#dc3545",
  },
  successButton: {
    backgroundColor: "#28a745",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
  },
});

export default Button;
