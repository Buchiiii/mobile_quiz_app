import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../../../constants/themes";

const styles = StyleSheet.create({
  textContainer: { marginTop: 32 },
});

const text = (isDark: boolean) =>
  ({
    fontSize: 40,
    fontWeight: "300",
    color: isDark ? "#fff" : "#313E51",
  } as StyleProp<ViewStyle>);

const subjectText = (isDark: boolean) =>
  ({
    marginTop: 8,
    fontWeight: "500",
    fontSize: 40,
    fontStyle: "normal",
    color: isDark ? "#fff" : "#313E51",
  } as StyleProp<ViewStyle>);
export { styles, text ,subjectText};
