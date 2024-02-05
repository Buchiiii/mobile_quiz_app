import { StyleProp, StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  bigContainer: {
    padding: 32,
    borderWidth: 0.2,
    borderColor: "white",
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 5, height: 2 },
    marginTop: 40,
  },
  smallContainer: {},

  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});

const text = (isDark: boolean) =>
  ({
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 16,
    color: isDark ? "#fff" : "black",
  } as StyleProp<ViewStyle>);
const scoree = (isDark: boolean) =>
  ({
    fontSize: 88,
    fontWeight: "500",
    fontStyle: "normal",
    color: isDark ? "#fff" : "black",
  } as StyleProp<ViewStyle>);
const totalQuestions = (isDark: boolean) =>
  ({
    color: isDark ? "#fff" : "#626C7F",
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
  } as StyleProp<ViewStyle>);
export { styles, text, totalQuestions, scoree };
