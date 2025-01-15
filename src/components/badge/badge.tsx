/**
 * Badge Component
 *
 * A flexible badge component for React Native applications.
 * Displays a badge with a customizable value, color, position, and size.
 * Can wrap around any child component to enhance its functionality.
 */

import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import tw from "twrnc";

/**
 * Props for the Badge component.
 */
interface BadgeProps {
  /**
   * The badge value, which can be a string or a number.
   */
  value: string | number;

  /**
   * Background color for the badge. Defaults to red (#FF0000).
   */
  color?: string;

  /**
   * Text color for the badge. Defaults to white (#FFF).
   */
  textColor?: string;

  /**
   * Position of the badge relative to its parent. 
   * Can be "top-left", "top-right", "bottom-left", or "bottom-right".
   */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";

  /**
   * Size of the badge. Options are "small", "medium", or "large".
   * Defaults to "medium".
   */
  size?: "small" | "medium" | "large";

  /**
   * Custom styles to override default styles for the badge.
   * Includes styles for the container and text.
   */
  customStyles?: {
    container?: ViewStyle;
    text?: TextStyle;
  };

  /**
   * Tailwind CSS class names for further customization.
   * Includes class names for the wrapper, badge container, and text.
   */
  className?: {
    container?: string;
    text?: string;
    wrapper?: string;
  };

  /**
   * Content to wrap the badge around.
   * Can be any valid React node, such as a button, icon, or image.
   */
  children?: React.ReactNode;
}

/**
 * Badge component function.
 * 
 * Displays a badge with customizable styles, position, and content.
 * Wraps around any child component to show additional information or status.
 */
const Badge: React.FC<BadgeProps> = ({
  value,
  color = "#FF0000",
  textColor = "#FFF",
  position = "top-right",
  size = "medium",
  customStyles = {},
  className = {},
  children,
}) => {
  // Define styles based on the badge size
  const badgeSizeStyles = {
    small: { width: 16, height: 16, borderRadius: 8, fontSize: 10 },
    medium: { width: 20, height: 20, borderRadius: 10, fontSize: 12 },
    large: { width: 24, height: 24, borderRadius: 12, fontSize: 14 },
  };

  // Define styles for badge positions
  const positionStyles = {
    "top-left": { top: -4, left: -4 },
    "top-right": { top: -4, right: -4 },
    "bottom-left": { bottom: -4, left: -4 },
    "bottom-right": { bottom: -4, right: -4 },
  };

  // Get size-related styles
  const { width, height, borderRadius, fontSize } =
    badgeSizeStyles[size] || badgeSizeStyles.medium;

  return (
    <View
      style={[
        styles.wrapper,
        className.wrapper ? tw`${className.wrapper}` : {},
      ]}
    >
      {children}
      <View
        style={[
          styles.badge,
          { backgroundColor: color, width, height, borderRadius },
          positionStyles[position],
          customStyles.container,
          className.container ? tw`${className.container}` : {},
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: textColor, fontSize },
            customStyles.text,
            className.text ? tw`${className.text}` : {},
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

/**
 * Default styles for the Badge component.
 */
const styles = StyleSheet.create({
  wrapper: {
    position: "relative", // Ensures proper positioning of the badge relative to its children
  },
  badge: {
    position: "absolute", // Positions the badge in one of the four corners
    alignItems: "center", // Centers the text horizontally
    justifyContent: "center", // Centers the text vertically
  },
  text: {
    fontWeight: "bold", // Makes the text bold for better visibility
    textAlign: "center", // Ensures the text is centered
  },
});

export default Badge;
