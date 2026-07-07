import { colors } from "@/styles/global";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.header },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
      {/* The children to be rendered on initial render is the one who sits at the top of the stack i.e., (tabs)/index in our case */}
      <Stack.Screen options={{ title: "Meals" }} name="meals" />
      <Stack.Screen options={{ title: "Add Meal" }} name="add-meal" />
      {/* Here, you can only render the children which are present inside the App Folder as far I know */}
    </Stack>
  );
}
