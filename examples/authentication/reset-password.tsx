import { Button, Text, TextInput } from "@/trendui";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log({ currentPassword, newPassword, confirmPassword });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-4xl font-bold mb-3">Reset Password</Text>
          <Text className="text-gray-500 text-lg">
            Please enter your current password and new password
          </Text>
        </View>

        {/* Form */}
        <View className="space-y-2">
          <View className="relative">
            <TextInput
              label="Current Password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter your current password"
              variant="filled"
              isPassword={!showCurrentPassword}
              className="mb-3"
              inputClassName="py-3 px-4 pr-12"
            />
            <MaterialIcons
              name={showCurrentPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#666"
              onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-14"
            />
          </View>

          <View className="relative">
            <TextInput
              label="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter your new password"
              variant="filled"
              isPassword={!showNewPassword}
              className="mb-3"
              inputClassName="py-3 px-4 pr-12"
            />
            <MaterialIcons
              name={showNewPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#666"
              onPress={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-14"
            />
          </View>

          <View className="relative">
            <TextInput
              label="Confirm New Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your new password"
              variant="filled"
              isPassword={!showConfirmPassword}
              className="mb-3"
              inputClassName="py-3 px-4 pr-12"
            />
            <MaterialIcons
              name={showConfirmPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#666"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-14"
            />
          </View>

          {/* Submit Button */}
          <Button
            value="Reset Password"
            className="py-4 rounded-xl mt-4"
            onPress={handleSubmit}
            disabled={
              isLoading ||
              !currentPassword ||
              !newPassword ||
              !confirmPassword ||
              newPassword !== confirmPassword
            }
            loading={isLoading}
            textStyle={{ color: "white" }}
          />

          {/* Back to Sign In */}
          <View className="flex-row justify-center items-center space-x-2 mt-8">
            <Link href="/sign-in">
              <Text className="text-blue-500 font-semibold text-base">
                Back to Sign In
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
