import { createHomeStyles } from '@/assets/images/styles/home.styles';
import { useTheme } from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const Spinner = () => {
    const { colors } = useTheme();
    const homeStyle = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyle.container}>
        <View style={homeStyle.loadingContainer}>
            <ActivityIndicator size='large' color={colors.primary} />
            <Text style={homeStyle.loadingText}>Loading Goals...</Text>
        </View>
    </LinearGradient>
  )
}

export default Spinner