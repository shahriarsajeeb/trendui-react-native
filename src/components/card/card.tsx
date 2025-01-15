/**
 * Card Component
 *
 * A flexible card component for React Native applications.
 * Supports background images, customizable themes, content, and footer sections.
 */

import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";
import tw from "twrnc";

/**
 * Props for the Card component.
 */
interface CardProps {
  /**
   * Title text for the card.
   */
  title?: string;

  /**
   * Subtitle text for the card.
   */
  subtitle?: string;

  /**
   * URL of the background image for the card.
   */
  image?: string;

  /**
   * Overlay color over the background image. Defaults to `rgba(0, 0, 0, 0.5)`.
   */
  overlayColor?: string;

  /**
   * Border radius for the card. Defaults to 16.
   */
  borderRadius?: number;

  /**
   * Optional footer content to display at the bottom of the card.
   */
  footer?: React.ReactNode;

  /**
   * Main content inside the card.
   */
  children?: React.ReactNode;

  /**
   * Theme for the card. Can be "light" or "dark". Defaults to "light".
   */
  theme?: "light" | "dark";

  /**
   * Custom styles for various sections of the card.
   * Includes styles for container, header, content, footer, and image.
   */
  customStyles?: {
    container?: ViewStyle;
    header?: ViewStyle;
    content?: ViewStyle;
    footer?: ViewStyle;
    image?: ImageStyle;
  };

  /**
   * Tailwind CSS classes for customizing the card sections.
   * Includes classes for container, header, content, and footer.
   */
  className?: {
    container?: string;
    header?: string;
    content?: string;
    footer?: string;
  };
}

/**
 * Card component function.
 *
 * Displays a customizable card with optional title, subtitle, background image,
 * overlay, content, and footer. The appearance can be styled using props.
 */
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  overlayColor = "rgba(0, 0, 0, 0.5)", // Default overlay color
  borderRadius = 16, // Default border radius
  footer,
  children,
  theme = "light", // Default theme
  customStyles = {},
  className = {},
}) => {
  // Determine if the dark theme is applied
  const isDarkTheme = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { borderRadius },
        className.container ? tw`${className.container}` : {}, // Tailwind styles
        customStyles.container,
        isDarkTheme ? styles.darkContainer : styles.lightContainer, // Theme-specific styles
      ]}
    >
      {/* Background Image with Overlay */}
      {image && (
        <ImageBackground
          source={{ uri: image }}
          style={[styles.image, { borderRadius }]}
        >
          <View
            style={[
              styles.overlay,
              { backgroundColor: overlayColor, borderRadius },
            ]}
          />
        </ImageBackground>
      )}

      {/* Header Section */}
      {(title || subtitle) && (
        <View
          style={[
            styles.header,
            customStyles.header,
            className.header ? tw`${className.header}` : {}, // Tailwind styles
          ]}
        >
          {title && (
            <Text
              style={[
                styles.title,
                isDarkTheme ? styles.darkTitle : styles.lightTitle, // Theme-specific styles
              ]}
            >
              {title}
            </Text>
          )}
          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                isDarkTheme ? styles.darkSubtitle : styles.lightSubtitle, // Theme-specific styles
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      )}

      {/* Main Content Section */}
      {children && (
        <View
          style={[
            styles.content,
            isDarkTheme ? styles.darkContent : styles.lightContent, // Theme-specific styles
            customStyles.content,
            className.content ? tw`${className.content}` : {}, // Tailwind styles
          ]}
        >
          {children}
        </View>
      )}

      {/* Footer Section */}
      {footer && (
        <View
          style={[
            styles.footer,
            isDarkTheme ? styles.darkFooter : styles.lightFooter, // Theme-specific styles
            customStyles.footer,
            className.footer ? tw`${className.footer}` : {}, // Tailwind styles
          ]}
        >
          {footer}
        </View>
      )}
    </View>
  );
};

/**
 * Default styles for the Card component.
 */
const styles = StyleSheet.create({
  container: {
    marginVertical: 8, // Spacing around the card
    overflow: "hidden", // Ensures content stays within rounded corners
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Shadow blur radius
    elevation: 5, // Elevation for Android
  },
  lightContainer: {
    backgroundColor: "#FFF", // Light theme background
  },
  darkContainer: {
    backgroundColor: "#1C1C1E", // Dark theme background
  },
  image: {
    height: 200, // Default height for background image
    width: "100%", // Full width
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Full coverage of the image
  },
  header: {
    padding: 16, // Padding around header content
  },
  title: {
    fontSize: 18, // Font size for the title
    fontWeight: "bold", // Bold text
  },
  lightTitle: {
    color: "#000", // Light theme title color
  },
  darkTitle: {
    color: "#FFF", // Dark theme title color
  },
  subtitle: {
    fontSize: 14, // Font size for the subtitle
    marginTop: 4, // Spacing between title and subtitle
  },
  lightSubtitle: {
    color: "#555", // Light theme subtitle color
  },
  darkSubtitle: {
    color: "#AAA", // Dark theme subtitle color
  },
  content: {
    padding: 16, // Padding around content
  },
  lightContent: {
    backgroundColor: "#F9F9F9", // Light theme content background
  },
  darkContent: {
    backgroundColor: "#2C2C2E", // Dark theme content background
  },
  footer: {
    padding: 16, // Padding around footer
    borderTopWidth: 1, // Top border for separation
  },
  lightFooter: {
    borderTopColor: "#EEE", // Light theme footer border
  },
  darkFooter: {
    borderTopColor: "#444", // Dark theme footer border
  },
});

export default Card;
