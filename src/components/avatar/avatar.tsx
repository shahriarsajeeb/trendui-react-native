/**
 * Avatar Component
 * 
 * A reusable and customizable avatar component for React Native applications. 
 * Displays an image or fallback initials if the image source is unavailable.
 */

import React from "react";
import { View, Text, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import tw from "twrnc";

/**
 * Props for the Avatar component.
 */
interface AvatarProps {
  /** 
   * URL or local path for the avatar image. 
   * If not provided, fallback initials will be displayed. 
   */
  source?: string;

  /** 
   * Fallback initials to display when the image source is unavailable. 
   */
  initials?: string;

  /** 
   * Diameter or size of the avatar. Defaults to 50. 
   */
  size?: number;

  /** 
   * Shape of the avatar. Can be "circle" or "square". Defaults to "circle". 
   */
  shape?: "circle" | "square";

  /** 
   * Theme for the fallback initials. Can be "light" or "dark". Defaults to "light". 
   */
  theme?: "light" | "dark";

  /** 
   * Custom styles for the avatar. 
   * Allows overriding container, image, and initials styles. 
   */
  customStyles?: {
    container?: ViewStyle;
    image?: ImageStyle;
    initials?: TextStyle;
  };

  /** 
   * Tailwind CSS classes for further customization. 
   * Supports classes for container, image, and initials. 
   */
  className?: {
    container?: string;
    image?: string;
    initials?: string;
  };
}

/**
 * Avatar component function.
 * 
 * Displays an avatar image or fallback initials based on the provided props.
 */
const Avatar: React.FC<AvatarProps> = ({
  source,
  initials,
  size = 50,
  shape = "circle",
  theme = "light",
  customStyles = {},
  className = {},
}) => {
  const isDarkTheme = theme === "dark";

  const avatarStyle = [
    styles.container,
    { width: size, height: size, borderRadius: shape === "circle" ? size / 2 : 8 },
    customStyles.container,
    className.container ? tw`${className.container}` : {},
  ];

  const textStyle = [
    styles.initials,
    isDarkTheme ? styles.darkInitials : styles.lightInitials,
    customStyles.initials,
    className.initials ? tw`${className.initials}` : {},
  ];

  return (
    <View style={avatarStyle}>
      {source ? (
        <Image
          source={{ uri: source }}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: shape === "circle" ? size / 2 : 8 },
            customStyles.image,
            className.image ? tw`${className.image}` : {},
          ]}
        />
      ) : (
        <Text style={textStyle}>{initials}</Text>
      )}
    </View>
  );
};

/**
 * Default styles for the Avatar component.
 */
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0", // Default background for fallback initials
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  initials: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333", // Default text color for fallback initials
  },
  lightInitials: {
    color: "#333",
  },
  darkInitials: {
    color: "#FFF",
  },
});

export default Avatar;
