/**
 * Checkbox Component
 *
 * A customizable checkbox component for React Native applications.
 * Supports animations, labels, and various styles for better UI integration.
 */

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ViewStyle,
  TextStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

/**
 * Props for the Checkbox component.
 */
interface CheckboxProps {
  /**
   * The current state of the checkbox (checked or not).
   */
  checked: boolean;

  /**
   * Callback triggered when the checkbox is toggled.
   * Passes the new `checked` state as an argument.
   */
  onChange: (checked: boolean) => void;

  /**
   * Optional label text displayed alongside the checkbox.
   */
  label?: string;

  /**
   * Position of the label relative to the checkbox.
   * Options are "left" or "right". Defaults to "right".
   */
  labelPosition?: "left" | "right";

  /**
   * Size of the checkbox. Defaults to 24.
   */
  size?: number;

  /**
   * Color of the checkbox when it is checked. Defaults to blue (#007BFF).
   */
  color?: string;

  /**
   * If `true`, the checkbox is disabled and cannot be toggled.
   */
  disabled?: boolean;

  /**
   * Enable or disable the fill animation. Defaults to `true`.
   */
  enableAnimation?: boolean;

  /**
   * Custom styles for various elements of the checkbox.
   * Includes styles for the container, checkbox, and label.
   */
  customStyles?: {
    container?: ViewStyle;
    checkbox?: ViewStyle;
    label?: TextStyle;
  };

  /**
   * Tailwind class names for customizing the checkbox using Tailwind CSS.
   * Includes classes for the container, checkbox, and label.
   */
  className?: {
    container?: string;
    checkbox?: string;
    label?: string;
  };
}

/**
 * Checkbox component function.
 *
 * Displays a toggleable checkbox with optional label and animation.
 * The state, style, and behavior are fully customizable through props.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  labelPosition = "right",
  size = 24,
  color = "#007BFF",
  disabled = false,
  enableAnimation = true,
  customStyles = {},
  className = {},
}) => {
  // Animated value for the checkbox fill background
  const fillAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;

  // Update animation when the `checked` state changes
  useEffect(() => {
    if (enableAnimation) {
      Animated.timing(fillAnim, {
        toValue: checked ? 1 : 0,
        duration: 300, // Duration of the animation in milliseconds
        useNativeDriver: false, // Native driver not supported for backgroundColor animations
      }).start();
    } else {
      fillAnim.setValue(checked ? 1 : 0);
    }
  }, [checked, enableAnimation]);

  // Interpolate animation to switch background color
  const backgroundColor = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FFF", color], // Transition from white to the defined color
  });

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8} // Disable click effect if checkbox is disabled
      style={[
        styles.container,
        className.container ? tw`${className.container}` : {},
        customStyles.container,
      ]}
      onPress={() => {
        if (!disabled) {
          onChange(!checked); // Toggle the checked state
        }
      }}
    >
      {label && labelPosition === "left" && (
        <Text
          style={[
            styles.label,
            { marginRight: 8 }, // Add spacing between label and checkbox
            className.label ? tw`${className.label}` : {},
            customStyles.label,
          ]}
        >
          {label}
        </Text>
      )}
      <Animated.View
        style={[
          styles.checkbox,
          {
            width: size,
            height: size,
            borderRadius: size / 6, // Rounded corners based on size
            borderColor: checked ? color : "#999", // Dynamic border color
            backgroundColor, // Animated fill color
          },
          className.checkbox ? tw`${className.checkbox}` : {},
          customStyles.checkbox,
        ]}
      >
        {checked && (
          <MaterialIcons name="check" size={size / 1.5} color="#FFF" />
        )}
      </Animated.View>
      {label && labelPosition === "right" && (
        <Text
          style={[
            styles.label,
            { marginLeft: 8 }, // Add spacing between checkbox and label
            className.label ? tw`${className.label}` : {},
            customStyles.label,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

/**
 * Default styles for the Checkbox component.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
  },
  checkbox: {
    justifyContent: "center", // Center the check icon vertically
    alignItems: "center", // Center the check icon horizontally
    borderWidth: 2, // Border width for the checkbox
  },
  label: {
    fontSize: 16, // Default font size for the label
    color: "#333", // Default text color for the label
  },
});

export default Checkbox;
