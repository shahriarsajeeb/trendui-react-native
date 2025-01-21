import { Button, Checkbox, Text, TextInput } from "@/trendui";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log({ email, password, rememberMe });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-16">
        {/* Header */}
        <View className="mb-16">
          <Text className="text-4xl font-bold mb-3">Welcome Back!</Text>
          <Text className="text-gray-500 text-lg">
            Please sign in to continue
          </Text>
        </View>

        {/* Form */}
        <View className="space-y-2">
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            variant="filled"
            className="mb-3"
            inputClassName="py-3 px-4"
          />

          <View className="relative">
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              variant="filled"
              isPassword={!showPassword}
              className="mb-6"
              inputClassName="py-2 px-4 pr-12"
            />
           
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#666"
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-14"
              />
          </View>

          {/* Submit Button */}
          <Button
            value="Sign In"
            className="py-4 rounded-xl"
            textStyle={{ color: "white" }}
            onPress={handleSubmit}
            disabled={isLoading || !email || !password}
            loading={isLoading}
          />
          {/* Remember Me */}
          <View className="flex-row items-center space-x-3 mt-4">
            <Checkbox
              checked={rememberMe}
              onChange={setRememberMe}
              color={rememberMe ? "#007AFF" : undefined}
            />
            <Text className="text-gray-600 text-base ml-3">Remember me</Text>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center space-x-2 mt-8">
            <Text className="text-gray-600 text-base mr-1">
              Don't have an account?
            </Text>
            <Link href="/sign-up">
              <Text className="text-blue-500 font-semibold text-base">
                Sign Up
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
