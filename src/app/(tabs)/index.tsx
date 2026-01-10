import { createHomeStyles } from "@/assets/images/styles/home.styles";
import GoalInput from "@/components/GoalInput";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import Feather from "@expo/vector-icons/Feather";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Goal = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  // npx expo start --host tunnel
  const goals = useQuery(api.todos.get);
  const toggleGoal = useMutation(api.todos.toggle);
  const deleteGoal = useMutation(api.todos.deleteTodo);

  const hangleToggleGoal = async (id: Id<"todos">) => {
    try {
      await toggleGoal({id});
    } catch (error) {
      console.log("ERROR TOGGLE", error);
      Alert.alert("Error", "Failed to toggle goal");
    }
  }

  const handleDeleteGoal = async (id: Id<"todos">) => {
    await deleteGoal({id});
    // Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
    //   { text: "Cancel", style: "cancel" },
    //   {
    //     text: "Delete",
    //     style: "destructive",
    //     onPress: () => deleteGoal({ id }),
    //   },
    // ]);
  }

  const isLoading = goals === undefined;

  const renderCard = ({item}: {item: Goal}) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => hangleToggleGoal(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Feather name="check-circle" size={24} color="black" />
              )}
            </LinearGradient>
          </TouchableOpacity>
          <View style={homeStyles.todoTextContainer}>
            <Text
              style={[
                homeStyles.todoText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>
            <View style={homeStyles.editButtons}>
              <TouchableOpacity
                onPress={() => handleDeleteGoal(item._id)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.danger}
                  style={homeStyles.editButton}
                >
                  <Feather name="delete" size={18} color="black" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }

  if(isLoading) return <Spinner />

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <GoalInput />
        <FlatList
          data={goals} renderItem={renderCard} keyExtractor={(item) => item._id} style={homeStyles.todoList} contentContainerStyle={homeStyles.todoListContent}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
