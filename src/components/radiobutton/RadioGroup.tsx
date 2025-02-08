import React, { useState, createContext } from "react";
import { StyleSheet } from "react-native";
import Animated, { FadeIn, Layout } from "react-native-reanimated";
// import RadioButton from "./RadioButton";

interface RadioContextType {
  selectedValue: string | number | null;
  handleSelect: (value: string | number) => void;
}

export const RadioGroupContext = createContext<RadioContextType>({
  selectedValue: null,
  handleSelect: () => {},
});

interface RadioGroupProps {
  defaultValue?: string | number;
  onChange: (value: string | number) => void;
  name: string;
  accessibilityLabel: string;
  children: React.ReactNode;
}

function RadioGroup({
  defaultValue,
  onChange,
  name,
  accessibilityLabel,
  children,
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    defaultValue || null
  );

  const handleSelect = (value: string | number) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <RadioGroupContext.Provider value={{ selectedValue, handleSelect }}>
      <Animated.View
        style={styles.container}
        accessibilityLabel={accessibilityLabel}
        entering={FadeIn.duration(300)}
        layout={Layout.springify()}
      >
        {children}
      </Animated.View>
    </RadioGroupContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

export default RadioGroup;
