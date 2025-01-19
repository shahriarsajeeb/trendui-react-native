import { Button, Text, TextInput } from "@/trendui";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log({ fullName, email, password, confirmPassword });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-16">
        {/* Header */}
        <View className="mb-16">
          <Text className="text-4xl font-bold mb-3">Create Account</Text>
          <Text className="text-gray-500 text-lg">
            Please fill in the form to continue
          </Text>
        </View>

        {/* Form */}
        <View className="space-y-2">
          <TextInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            variant="filled"
            className="mb-3"
            inputClassName="py-3 px-4"
          />

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
              className="mb-3"
              inputClassName="py-3 px-4 pr-12"
            />
            <TouchableOpacity
              className="absolute right-4 top-14"
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          <View className="relative">
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              variant="filled"
              isPassword={!showConfirmPassword}
              className="mb-3"
              inputClassName="py-3 px-4 pr-12"
            />
            <TouchableOpacity
              className="absolute right-4 top-14"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <MaterialIcons
                name={showConfirmPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* Submit Button */}
          <Button
            value="Sign Up"
            className="py-4 rounded-xl"
            onPress={handleSubmit}
            disabled={
              isLoading ||
              !email ||
              !password ||
              !fullName ||
              !confirmPassword ||
              password !== confirmPassword
            }
            loading={isLoading}
          />

          {/* Sign In Link */}
          <View className="flex-row justify-center items-center space-x-2 mt-8">
            <Text className="text-gray-600 text-base mr-1">
              Already have an account?
            </Text>
            <Link href="/sign-in">
              <Text className="text-blue-500 font-semibold text-base">
                Sign In
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
