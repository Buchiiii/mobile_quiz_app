import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../../constants/themes";

const Styles =(isDark: boolean)=>{return{
  textContainer: { marginTop: 32} as StyleProp<ViewStyle>,
  text: {
    fontSize: 40,
    fontWeight: "300",
    color: isDark ? "white" : "black"
  } as StyleProp<ViewStyle>,

  spanText: {
    fontWeight: "500",
  } as StyleProp<ViewStyle>,

  subjectText: {
    marginTop: 16,
    fontWeight: "400",
    fontStyle: "italic",
    color: COLORS.greyNavy
  } as StyleProp<ViewStyle>,
}};

export default Styles;
