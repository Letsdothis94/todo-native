import { createHomeStyles } from '@/assets/images/styles/home.styles';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/hooks/useTheme';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const GoalInput = () => {
    const { colors } = useTheme();
    const homeStyle = createHomeStyles(colors);

    const [newGoal, setNewGoal] = useState("");
    const addGoal = useMutation(api.todos.add);

    const handleAddGoal = async () => {
        if(newGoal.trim()) {
            try {
                await addGoal({ text: newGoal.trim() });
                setNewGoal("");
            } catch (error) {
                console.log("Error adding new goal!", error);
                Alert.alert("Error", "Failed to add new goal");
            }
        }
    };
    
  return (
    <View style={homeStyle.inputSection}>
      <View style={homeStyle.inputWrapper}>
        <TextInput
            style={homeStyle.input}
            placeholder='Add a goal'
            value={newGoal}
            onChangeText={setNewGoal}
            onSubmitEditing={handleAddGoal}
            placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity onPress={handleAddGoal} activeOpacity={0.8} disabled={!newGoal.trim()}>
          <LinearGradient colors={newGoal.trim() ? colors.gradients.primary : colors.gradients.muted} style={[homeStyle.addButton, !newGoal.trim() && homeStyle.addButtonDisabled]}>
            <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GoalInput