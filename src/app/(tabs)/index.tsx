import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>npx expo start --host tunnel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
})
