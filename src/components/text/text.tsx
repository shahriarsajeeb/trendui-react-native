import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import tw from "twrnc"; // Import twrnc for TailwindCSS
import { responsiveFontSize } from "@trendui/react-native/src/utils/responsive.font.sizes";

/**
 * @typedef TextProps
 * Extends React Native's TextProps to include additional properties for theming and customization.
 * @property {"lg" | "xl" | "2xl" | "3xl" | number} size - Optional. Custom size of the text.
 * @property {string} className - Optional. TailwindCSS classes for styling.
 * @property {"label" | "title" | "header" | "paragraph" | "baseText"} variant - Optional. Predefined styles for different text types.
 * @property {'light' | 'dark'} theme - Optional. Theme mode, defaults to 'light'.
 * @property {"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"} fontWeight - Optional. Font weight for the text.
 */
export interface TextProps extends RNTextProps {
  size?: "lg" | "xl" | "2xl" | "3xl" | number;
  className?: string;
  variant?: "label" | "title" | "header" | "paragraph" | "baseText";
  theme?: "light" | "dark";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

/**
 * A customizable Text component that integrates with TailwindCSS and supports theming.
 *
 * @param {TextProps} props - The properties passed to the text component.
 * @returns {JSX.Element} - The rendered text component.
 */
const Text: React.FC<TextProps> = ({
  children,
  size,
  style,
  className,
  variant,
  theme = "light",
  fontWeight,
  ...props
}) => {
  const themeColors = {
    textPrimary: theme === "dark" ? "#FFF" : "#000",
    textSecondary: theme === "dark" ? "#AAA" : "#666",
  };

  const variants = {
    label: {
      fontSize: responsiveFontSize(14),
      color: themeColors.textSecondary,
    },
    baseText: {
      fontSize: responsiveFontSize(18),
      color: themeColors.textPrimary,
    },
    title: {
      fontSize: responsiveFontSize(20),
      fontWeight: "bold",
      color: themeColors.textPrimary,
    },
    header: {
      fontSize: responsiveFontSize(24),
      fontWeight: "bold",
      color: themeColors.textPrimary,
    },
    paragraph: {
      fontSize: responsiveFontSize(16),
      color: themeColors.textPrimary,
    },
  };

  const variantStyles = variant ? variants[variant] : {};

  const combinedStyles = StyleSheet.flatten([
    variantStyles,
    getSizeStyles(size),
    className ? tw`${className}` : {},
    fontWeight ? { fontWeight } : {},
    style,
  ]);

  return (
    <RNText style={combinedStyles} {...props}>
      {children}
    </RNText>
  );
};

/**
 * Generates custom size styles based on the size prop.
 * @param {"lg" | "xl" | "2xl" | "3xl" | number} size - The size of the text.
 * @returns {object} - The style object with the fontSize property set.
 */
function getSizeStyles(size?: "lg" | "xl" | "2xl" | "3xl" | number) {
  if (size === undefined) {
    return {};
  }

  if (typeof size === "number") {
    return { fontSize: responsiveFontSize(size) };
  } else {
    return { fontSize: responsiveFontSize(sizeMap[size]) };
  }
}

const sizeMap = {
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
};

export default Text;
