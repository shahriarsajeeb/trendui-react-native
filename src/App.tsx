import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Welcome page for the TrendUI library.
 * This page serves as an introduction to the library, showcasing its name and purpose.
 *
 * @returns {JSX.Element} A styled welcome page for TrendUI.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TrendUI</Text>
      <Text style={styles.subtitle}>
        A modern UI component library for React Native / Expo, built with
        flexibility, accessibility, and design in mind.
      </Text>
      <Text style={styles.description}>
        Get started by exploring our components: Button, Select, TextInput, and
        more. Build stunning mobile apps effortlessly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9", // Neutral background color
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#007bff", // TrendUI primary color
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 16,
  },
});
