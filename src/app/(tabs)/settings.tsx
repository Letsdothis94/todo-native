import { createSettingsStyles } from '@/assets/images/styles/settings.styles';
import SettingsBtns from '@/components/SettingsBtns';
import { useTheme } from '@/hooks/useTheme';
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const { colors, toggleDarkMode } = useTheme();
  const settingsStyle = createSettingsStyles(colors);

    return (
      <LinearGradient colors={colors.gradients.background} style={settingsStyle.container}>
        <SafeAreaView style={settingsStyle.safeArea}>
          <View style={settingsStyle.header}>
            <View style={settingsStyle.titleContainer}>
              <LinearGradient colors={colors.gradients.primary} style={settingsStyle.iconContainer}>
                <Ionicons name="settings-outline" size={24} color="#fff" />
              </LinearGradient>
              <Text style={settingsStyle.title}>Settings</Text>
            </View>
          </View>

          <ScrollView
            style={settingsStyle.scrollView}
            contentContainerStyle={settingsStyle.content}
            showsVerticalScrollIndicator={false}
          >
            <SettingsBtns />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
})