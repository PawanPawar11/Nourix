import { StyleSheet } from "react-native";

export const colors = {
  backgroundColor: "#1A1A2E",
  header: "#242444",
  surface: "#2A2A4A",
  primary: "#4FC3F7",
  text: "#FFF",
  textSecondary: "#A0A0B0",
  alert: "#FF5252",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },

  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
