import { globalStyles } from "@/styles/global";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Nourix</Text>
      <Text style={styles.date}>Thursday, March 17</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});
