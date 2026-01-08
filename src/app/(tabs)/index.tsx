import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // const todos = useQuery(api.todos.get);
  // console.log(todos);

  const addTodo = useMutation(api.todos.add);
  const clearAll = useMutation(api.todos.deleteAll);

  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>npx expo start --host tunnel</Text>
      <TouchableOpacity onPress={() => addTodo({ text: "Sing a song" })}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAll()}>
        <Text>Delete all </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});
