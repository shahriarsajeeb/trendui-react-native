import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import tw from "twrnc";

/**
 * @typedef {Object} SelectProps
 * @property {string} [label] - The label for the dropdown.
 * @property {string} [placeholder="Select an option"] - The placeholder text for the dropdown.
 * @property {Array<{ label: string; value: any }>} options - The list of options for the dropdown.
 * @property {any} [value] - The selected value of the dropdown.
 * @property {function} [onValueChange] - Callback function triggered when a new value is selected.
 * @property {string} [error] - Error message displayed below the dropdown.
 * @property {"outlined" | "filled" | "standard"} [variant="outlined"] - Style variant of the dropdown.
 * @property {StyleProp<ViewStyle>} [style] - Custom styles for the dropdown container.
 * @property {StyleProp<TextStyle>} [labelStyle] - Custom styles for the dropdown label.
 * @property {StyleProp<TextStyle>} [errorStyle] - Custom styles for the error message.
 * @property {StyleProp<ViewStyle>} [dropdownStyle] - Custom styles for the dropdown options container.
 * @property {StyleProp<ViewStyle>} [optionStyle] - Custom styles for individual dropdown options.
 * @property {StyleProp<TextStyle>} [optionTextStyle] - Custom styles for dropdown option text.
 * @property {StyleProp<TextStyle>} [placeholderStyle] - Custom styles for the placeholder text.
 * @property {"light" | "dark"} [theme="light"] - Theme of the dropdown, supports light and dark modes.
 * @property {string} [className] - TailwindCSS classes for the dropdown container.
 * @property {string} [dropdownClassName] - TailwindCSS classes for the dropdown options container.
 * @property {string} [optionClassName] - TailwindCSS classes for individual dropdown options.
 */

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: { label: string; value: any }[];
  value?: any;
  onValueChange?: (value: any) => void;
  error?: string;
  variant?: "outlined" | "filled" | "standard";
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<ViewStyle>;
  optionTextStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  theme?: "light" | "dark";
  className?: string;
  dropdownClassName?: string;
  optionClassName?: string;
}

/**
 * A flexible dropdown component for React Native applications.
 *
 * Features:
 * - Supports light and dark themes.
 * - Customizable placeholder and label.
 * - Supports TailwindCSS integration via className props.
 * - Dynamic styling for dropdown container and options.
 * - Handles error messages with custom styles.
 *
 * @param {SelectProps} props - The properties for the Select component.
 * @returns {JSX.Element} A customizable dropdown component.
 */
const Select: React.FC<SelectProps> = ({
  label,
  placeholder = "Select an option",
  options,
  value,
  onValueChange,
  error,
  variant = "outlined",
  style,
  labelStyle,
  errorStyle,
  dropdownStyle,
  optionStyle,
  optionTextStyle,
  placeholderStyle,
  theme = "light",
  className,
  dropdownClassName,
  optionClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling dropdown visibility
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  }); // Position of the dropdown
  const [selectedValue, setSelectedValue] = useState(value); // Tracks the selected value

  const triggerRef = useRef<View>(null); // Reference to the dropdown trigger element

  /**
   * Toggles the dropdown visibility and calculates its position.
   */
  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      triggerRef.current?.measure((x, y, width, height, pageX, pageY) => {
        setDropdownPosition({
          top: pageY + height,
          left: pageX,
          width,
        });
        setIsOpen(true);
      });
    }
  };

  /**
   * Handles option selection and notifies the parent component.
   * @param {{ label: string, value: any }} item - The selected dropdown option.
   */
  const handleOptionSelect = (item: { label: string; value: any }) => {
    setSelectedValue(item.value);
    onValueChange?.(item.value);
    setIsOpen(false);
  };

  // Themed styles for the dropdown and its components
  const themeStyles = {
    container: theme === "dark" ? styles.darkContainer : {},
    label: theme === "dark" ? styles.darkLabel : {},
    dropdown: theme === "dark" ? styles.darkDropdown : styles.lightDropdown,
    errorText: theme === "dark" ? styles.darkErrorText : {},
    option: theme === "dark" ? styles.darkOption : styles.lightOption,
    optionText:
      theme === "dark" ? styles.darkOptionText : styles.lightOptionText,
    placeholderText:
      theme === "dark" ? styles.placeholderTextDark : styles.placeholderTextLight,
  };

  return (
    <View
      style={[
        styles.container,
        themeStyles.container,
        className ? tw`${className}` : {},
        style,
      ]}
    >
      {/* Label */}
      {label && (
        <Text style={[styles.label, themeStyles.label, labelStyle]}>
          {label}
        </Text>
      )}

      {/* Dropdown Trigger */}
      <TouchableOpacity
        ref={triggerRef}
        style={[styles.select, themeStyles.dropdown, dropdownStyle]}
        onPress={toggleDropdown}
      >
        <Text
          style={[
            styles.placeholder,
            themeStyles.placeholderText,
            placeholderStyle,
            !selectedValue && { color: theme === "dark" ? "#aaa" : "#666" },
            selectedValue && { color: theme === "dark" ? "#fff" : "#333" },
          ]}
        >
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : placeholder}
        </Text>
      </TouchableOpacity>

      {/* Dropdown Options */}
      <Modal transparent visible={isOpen} animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setIsOpen(false)}
        />
        <View
          style={[
            styles.dropdown,
            {
              position: "absolute",
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
            },
            dropdownClassName ? tw`${dropdownClassName}` : {},
            dropdownStyle,
          ]}
        >
          <FlatList
            data={options}
            keyExtractor={(item, index) => `${item.value}-${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  themeStyles.option,
                  optionClassName ? tw`${optionClassName}` : {},
                  optionStyle,
                ]}
                activeOpacity={0.7}
                onPress={() => handleOptionSelect(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    themeStyles.optionText,
                    optionTextStyle,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      {/* Error Message */}
      {error && (
        <Text style={[styles.errorText, themeStyles.errorText, errorStyle]}>
          {error}
        </Text>
      )}
    </View>
  );
};

// Styles for the dropdown and its components
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  select: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  placeholder: {
    fontSize: 16,
  },
  placeholderTextDark: {
    color: "#aaa",
  },
  placeholderTextLight: {
    color: "#666",
  },
  dropdown: {
    borderRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "#dc3545",
  },
  lightDropdown: {
    backgroundColor: "#fff",
  },
  darkDropdown: {
    backgroundColor: "#333",
  },
  lightOption: {
    backgroundColor: "#fff",
  },
  darkOption: {
    backgroundColor: "#444",
  },
  lightOptionText: {
    color: "#333",
  },
  darkOptionText: {
    color: "#fff",
  },
  darkContainer: {
    backgroundColor: "#000",
  },
  darkLabel: {
    color: "#fff",
  },
  darkErrorText: {
    color: "#ff6b6b",
  },
});

export default Select;
