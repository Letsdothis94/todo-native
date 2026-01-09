import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingsScreen = () => {
  const { toggleDarkMode } = useTheme();

    return (
      <View
        style={styles.container}
      >
        <Text>Settings Screen</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle Mode</Text>
        </TouchableOpacity>
      </View>
    )
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