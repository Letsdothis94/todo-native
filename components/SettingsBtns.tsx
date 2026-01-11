import { createSettingsStyles } from '@/assets/images/styles/settings.styles';
import { useTheme } from '@/hooks/useTheme';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const SettingsBtns = () => {
    const { isDarkMode, toggleDarkMode, colors } = useTheme();
    const [notifications, setNotifications] = useState(false);
    const settingsStyle = createSettingsStyles(colors);
    
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyle.settingIcon}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={18}
              color="#fff"
            />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Dark/Light Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyle.settingIcon}
          >
            <MaterialIcons
              name="notifications-active"
              size={18}
              color="#fff"
            />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Dark/Light Mode</Text>
        </View>
        <Switch
          value={notifications}
          onValueChange={() => setNotifications(!notifications)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
}

export default SettingsBtns