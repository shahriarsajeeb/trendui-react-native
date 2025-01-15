import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Icon library for arrow indicators
import tw from "twrnc"; // Tailwind CSS utility for React Native

/**
 * AccordionProps interface
 * Defines the properties accepted by the Accordion component.
 *
 * @property sections - An array of objects containing title and content for each accordion item.
 * @property style - Custom style for the overall accordion container.
 * @property className - Tailwind CSS classes for the container.
 * @property theme - Determines the theme for the accordion ("light" or "dark").
 * @property customStyles - Allows custom styles for specific sections of the accordion.
 */
interface AccordionProps {
  sections: {
    title: string;
    content: string;
  }[];
  style?: ViewStyle;
  className?: string;
  theme?: "light" | "dark"; // Theme prop
  customStyles?: {
    container?: ViewStyle;
    section?: ViewStyle;
    trigger?: ViewStyle;
    triggerActive?: ViewStyle;
    content?: ViewStyle;
    title?: TextStyle;
    titleActive?: TextStyle;
    contentText?: TextStyle;
  };
}

/**
 * Accordion Component
 * A reusable, customizable accordion component with light and dark themes.
 *
 * @param sections - Array of accordion items with title and content.
 * @param style - Custom style for the container.
 * @param className - Tailwind CSS classes for the container.
 * @param theme - Theme of the accordion ("light" or "dark").
 * @param customStyles - Object containing custom styles for various elements.
 */
const Accordion: React.FC<AccordionProps> = ({
  sections,
  style,
  className,
  theme = "light",
  customStyles = {},
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /**
   * Toggles the active state of an accordion item.
   *
   * @param section - The title of the section to toggle.
   */
  const toggleSection = (section: string) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  const isDarkTheme = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.darkContainer : styles.lightContainer,
        style,
        customStyles.container,
        className ? tw`${className}` : {},
      ]}
    >
      {sections.map((section, index) => {
        const isActive = activeSection === section.title;
        const isLastItem = index === sections.length - 1;

        return (
          <View
            key={index}
            style={[
              styles.section,
              isDarkTheme ? styles.darkSection : styles.lightSection,
              isLastItem && styles.lastSection, // Removes border for the last item
              customStyles.section,
            ]}
          >
            {/* Accordion Trigger */}
            <TouchableOpacity
              onPress={() => toggleSection(section.title)}
              style={[
                styles.trigger,
                isDarkTheme
                  ? isActive
                    ? styles.darkTriggerActive
                    : styles.darkTrigger
                  : isActive
                  ? styles.lightTriggerActive
                  : styles.lightTrigger,
                customStyles.trigger,
                isActive && customStyles.triggerActive,
                tw`flex-row justify-between items-center`,
              ]}
            >
              <Text
                style={[
                  styles.title,
                  isDarkTheme ? styles.darkTitle : styles.lightTitle,
                  isActive ? styles.activeTitle : null,
                  customStyles.title,
                  isActive && customStyles.titleActive,
                ]}
              >
                {section.title}
              </Text>
              {/* Arrow icon indicating expanded/collapsed state */}
              <AntDesign
                name={isActive ? "up" : "down"}
                size={16}
                color={isDarkTheme ? "#FFF" : "#333"}
              />
            </TouchableOpacity>

            {/* Accordion Content */}
            {isActive && (
              <View
                style={[
                  styles.content,
                  isDarkTheme ? styles.darkContent : styles.lightContent,
                  customStyles.content,
                ]}
              >
                <Text
                  style={[
                    styles.contentText,
                    isDarkTheme
                      ? styles.darkContentText
                      : styles.lightContentText,
                    customStyles.contentText,
                  ]}
                >
                  {section.content}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

/**
 * Stylesheet for Accordion component
 * Contains default styles for light and dark themes, and for each part of the accordion.
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  lightContainer: {
    backgroundColor: "#FFF",
  },
  darkContainer: {
    backgroundColor: "#0A0A0A",
  },
  section: {
    borderBottomWidth: 1,
  },
  lightSection: {
    borderBottomColor: "#DDD",
  },
  darkSection: {
    borderBottomColor: "#444",
  },
  lastSection: {
    borderBottomWidth: 0, // Removes the bottom border for the last item
  },
  trigger: {
    padding: 16,
  },
  lightTrigger: {
    backgroundColor: "#F5F5F5",
  },
  lightTriggerActive: {
    backgroundColor: "#E0E0E0",
  },
  darkTrigger: {
    backgroundColor: "#111",
  },
  darkTriggerActive: {
    backgroundColor: "#222",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  lightTitle: {
    color: "#333",
  },
  darkTitle: {
    color: "#EEE",
  },
  activeTitle: {
    color: "#007BFF",
  },
  content: {
    padding: 16,
  },
  lightContent: {
    backgroundColor: "#FAFAFA",
  },
  darkContent: {
    backgroundColor: "#111",
  },
  contentText: {
    fontSize: 14,
  },
  lightContentText: {
    color: "#555",
  },
  darkContentText: {
    color: "#BBB",
  },
});

export default Accordion;
