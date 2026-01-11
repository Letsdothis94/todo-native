import { createSettingsStyles } from '@/assets/images/styles/settings.styles';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/hooks/useTheme';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


const DeleteAll = () => {
    const { colors } = useTheme();
    const dangerStyle = createSettingsStyles(colors);
    const deleteAll = useMutation(api.todos.deleteAll);

    const handleDeleteAll = async () => {
        try {
            await deleteAll();
        } catch (error) {
            console.log("Error", error);
            throw new Error("Error in deletingAll");
        }
    }

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={dangerStyle.section}
    >
      <Text style={dangerStyle.sectionTitleDanger}>Danger Zone</Text>
      <TouchableOpacity 
        style={[dangerStyle.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleDeleteAll}
        activeOpacity={0.7}
      >
        <View style={dangerStyle.actionLeft}>
          <LinearGradient colors={colors.gradients.danger} style={dangerStyle.actionIcon}>
            <AntDesign name="delete" size={18} color="black" />
          </LinearGradient>
          <Text style={dangerStyle.actionTextDanger}>Delete All Goals</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default DeleteAll