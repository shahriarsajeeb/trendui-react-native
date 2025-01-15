/**
 * Tabs Component
 * A reusable component for creating tabbed navigation in React Native.
 * Supports light and dark themes, animations, and custom styles or classes.
 * 
 * @module Tabs
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
import tw from "twrnc";

/**
 * Tab Interface
 * Defines the structure of each tab in the Tabs component.
 * 
 * @interface Tab
 * @property {string} label - The label for the tab.
 * @property {React.ReactNode} content - The content displayed when the tab is active.
 */
interface Tab {
  label: string;
  content: React.ReactNode;
}

/**
 * TabsProps Interface
 * Defines the props for the Tabs component.
 * 
 * @interface TabsProps
 * @property {Tab[]} tabs - Array of tabs to display.
 * @property {number} [initialTabIndex=0] - Index of the initially active tab.
 * @property {"light" | "dark"} [theme="light"] - Theme for the component.
 * @property {boolean} [enableAnimation=true] - Enables fade-in animation when switching tabs.
 * @property {object} [customStyles] - Custom styles for various parts of the component.
 * @property {object} [className] - Custom Tailwind class names for styling.
 */
interface TabsProps {
  tabs: Tab[];
  initialTabIndex?: number;
  theme?: "light" | "dark";
  enableAnimation?: boolean;
  customStyles?: {
    container?: ViewStyle;
    tabContainer?: ViewStyle;
    tab?: ViewStyle;
    tabActive?: ViewStyle;
    tabText?: TextStyle;
    tabTextActive?: TextStyle;
    content?: ViewStyle;
  };
  className?: {
    container?: string;
    tabContainer?: string;
    tab?: string;
    tabActive?: string;
    content?: string;
    tabText?: string;
    tabTextActive?: string;
  };
}

/**
 * Tabs Component
 * Renders a tabbed navigation interface with optional animations and theming.
 * 
 * @component
 * @param {TabsProps} props - Props for configuring the Tabs component.
 * @returns {React.FC} The Tabs component.
 */
const Tabs: React.FC<TabsProps> = ({
  tabs,
  initialTabIndex = 0,
  theme = "light",
  enableAnimation = true,
  customStyles = {},
  className = {},
}) => {
  // State to manage the active tab index.
  const [activeTabIndex, setActiveTabIndex] = useState<number>(initialTabIndex);
  
  // Animation reference for fade-in effect.
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const isDarkTheme = theme === "dark";

  // Handles fade-in animation on tab switch.
  useEffect(() => {
    if (enableAnimation) {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [activeTabIndex, enableAnimation]);

  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.darkContainer : styles.lightContainer,
        customStyles.container,
        className.container ? tw`${className.container}` : {},
      ]}
    >
      {/* Tab Headers */}
      <View
        style={[
          styles.tabContainer,
          isDarkTheme ? styles.darkTabContainer : styles.lightTabContainer,
          customStyles.tabContainer,
          className.tabContainer ? tw`${className.tabContainer}` : {},
        ]}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                isActive
                  ? isDarkTheme
                    ? styles.darkTabActive
                    : styles.lightTabActive
                  : isDarkTheme
                  ? styles.darkTab
                  : styles.lightTab,
                isActive && customStyles.tabActive,
                customStyles.tab,
                className.tab ? tw`${className.tab}` : {},
                isActive && className.tabActive
                  ? tw`${className.tabActive}`
                  : {},
              ]}
              onPress={() => setActiveTabIndex(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  isActive
                    ? isDarkTheme
                      ? styles.darkTabTextActive
                      : styles.lightTabTextActive
                    : isDarkTheme
                    ? styles.darkTabText
                    : styles.lightTabText,
                  isActive && customStyles.tabTextActive,
                  customStyles.tabText,
                  className.tabText ? tw`${className.tabText}` : {},
                  isActive && className.tabTextActive
                    ? tw`${className.tabTextActive}`
                    : {},
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Tab Content */}
      <Animated.View
        style={[
          styles.content,
          isDarkTheme ? styles.darkContent : styles.lightContent,
          customStyles.content,
          className.content ? tw`${className.content}` : {},
          enableAnimation ? { opacity: fadeAnim } : {},
        ]}
      >
        {tabs[activeTabIndex].content}
      </Animated.View>
    </View>
  );
};

// Styles for the Tabs component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#FFF",
  },
  darkContainer: {
    backgroundColor: "#0A0A0A",
  },
  tabContainer: {
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 16,
  },
  lightTabContainer: {
    backgroundColor: "#F5F5F5",
  },
  darkTabContainer: {
    backgroundColor: "#222",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  lightTab: {
    backgroundColor: "transparent",
  },
  lightTabActive: {
    backgroundColor: "#1877F2",
  },
  darkTab: {
    backgroundColor: "transparent",
  },
  darkTabActive: {
    backgroundColor: "#333",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
  },
  lightTabText: {
    color: "#666",
  },
  lightTabTextActive: {
    color: "#FFF",
  },
  darkTabText: {
    color: "#AAA",
  },
  darkTabTextActive: {
    color: "#FFF",
  },
  content: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
  },
  lightContent: {
    backgroundColor: "#FAFAFA",
  },
  darkContent: {
    backgroundColor: "#111",
  },
});

export default Tabs;
