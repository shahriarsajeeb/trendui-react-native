import React, { useContext, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withSpring,
  useSharedValue,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { RadioGroupContext } from "./RadioGroup";

interface RadioButtonProps {
  label: string;
  value: string | number;
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  marginY?: number;
  color?: "red" | "yellow" | "green" | "black";
  customColor?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function RadioButton({
  label,
  value,
  isDisabled = false,
  size = "md",
  marginY = 0,
  color = "black",
  customColor,
}: RadioButtonProps) {
  const { selectedValue, handleSelect } = useContext(RadioGroupContext);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const sizeStyles = {
    sm: { circle: 18, dot: 10, text: 12 },
    md: { circle: 24, dot: 14, text: 16 },
    lg: { circle: 36, dot: 20, text: 20 },
  };

  const colors = {
    red: "#f44336",
    yellow: "#ffeb3b",
    green: "#4caf50",
    black: "#000",
  };

  const { circle, dot, text } = sizeStyles[size];
  const isSelected = selectedValue === value;
  const radioColor = customColor || colors[color];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });
    handleSelect(value);
  };

  const AnimatedDot = () => {
    return (
      <Animated.View
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        style={{
          width: dot,
          height: dot,
          borderRadius: dot / 2,
          backgroundColor: radioColor,
        }}
      />
    );
  };

  return (
    <AnimatedPressable
      style={[
        styles.radioOption,
        isDisabled && styles.disabled,
        { marginVertical: marginY },
        animatedStyle,
      ]}
      onPress={handlePress}
      disabled={isDisabled}
    >
      <Animated.View
        style={[
          styles.radioCircle,
          { width: circle, height: circle, borderRadius: circle / 2 },
          isDisabled && styles.disabledCircle,
          { borderColor: radioColor },
        ]}
      >
        {isSelected && <AnimatedDot />}
      </Animated.View>
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.radioText,
            { fontSize: text },
            isDisabled && styles.disabledText,
          ]}
          numberOfLines={1}
        >
          {label}
        </Animated.Text>
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "100%",
  },
  radioCircle: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    margin: 3,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  radioText: {
    color: "#000",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  disabled: {
    opacity: 0.5,
  },
  disabledCircle: {
    borderColor: "#d3d3d3",
  },
  disabledText: {
    color: "#d3d3d3",
  },
});

export default RadioButton;
