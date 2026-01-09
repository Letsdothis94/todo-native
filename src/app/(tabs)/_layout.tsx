import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import React from 'react';

const Tabslayout = () => {
  const { colors } = useTheme();

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textMuted,
      tabBarStyle: {
        backgroundColor: colors.surface,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        height: 90,
        paddingBottom: 30,
        paddingTop: 10
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600"
      },
      headerShown: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Goals",
          tabBarIcon: ({color, size}) => <Octicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default Tabslayout;