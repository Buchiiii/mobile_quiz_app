import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/themes";

const styles = StyleSheet.create({
  button: {
    height: 56,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
});

export default styles;
