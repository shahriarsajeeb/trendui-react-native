import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StyleProp,
  ImageStyle,
} from "react-native";

/**
 * Props definition for the Image component.
 *
 * @interface ImageProps
 * @property {string} src - URL source of the image to be displayed.
 * @property {string} [alt] - Alternative text to display if the image fails to load.
 * @property {number} width - Desired width of the image.
 * @property {number} height - Desired height of the image.
 * @property {number} [blurRadius=10] - Radius of the blur effect applied during image loading.
 * @property {StyleProp<ImageStyle>} [style] - Additional style object to customize the image.
 * @property {string} [className] - TailwindCSS class string for styling (if using a Tailwind integration).
 */
interface ImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  blurRadius?: number;
  style?: StyleProp<ImageStyle>;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  blurRadius = 10,
  style,
  className,
}) => {
  const [isError, setError] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Convert className to a style object if using a utility like 'tailwindcss-react-native'
  const computedStyle = className ? convertClassNameToStyle(className) : {};

  return (
    <View
      style={{ width, height, alignItems: "center", justifyContent: "center" }}
    >
      <Animated.Image
        source={{ uri: src }}
        style={[
          { width, height, position: "absolute", borderRadius: blurRadius },
          style,
          computedStyle,
          { opacity },
        ]}
        blurRadius={blurRadius}
        onLoad={onLoad}
        onError={() => setError(true)}
      />
      <Animated.Image
        source={{ uri: src }}
        style={[
          { width, height, position: "absolute", borderRadius: blurRadius },
          style,
          computedStyle,
          { opacity },
        ]}
        onLoad={onLoad}
        onError={() => {
          setError(true);
          opacity.setValue(0);
        }}
      />
      {isError && (
        <Text style={styles.errorText}>{alt || "Failed to load image"}</Text>
      )}
    </View>
  );
};

// Placeholder function if you're converting class names to styles
function convertClassNameToStyle(className: string): object {
  // Implement conversion logic here based on your setup
  return {};
}

const styles = StyleSheet.create({
  errorText: {
    color: "#ff0000",
    fontSize: 18,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default Image;
