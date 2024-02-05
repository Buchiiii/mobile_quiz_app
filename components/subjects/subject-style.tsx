import { StyleProp, StyleSheet, ViewStyle } from "react-native";

const styles = (isDark: boolean) => {
  return {
    container: {
      flexDirection: "column",
      rowGap: 16,
      marginTop: 40,
      paddingBottom: 20,
      alignItems: "center",
      alignSelf: "stretch",
    } as StyleProp<ViewStyle>,

    button: {
      width: "100%",
      padding: 12,
      borderRadius: 12,
      shadowColor: "black",
      shadowOpacity: 0.6,
      shadowOffset: { width: 0.7, height: 0.7 },
      backgroundColor: isDark ? "#3B4D66" : "white",
    } as StyleProp<ViewStyle>,

    textContainer: {
      //justifyContent: "center",
      height: 40,
      alignItems: "center",

      flexDirection: "row",
    } as StyleProp<ViewStyle>,

    text: {
      fontSize: 18,
      fontWeight: "500",
      paddingLeft: 16,
      color: isDark ? "white" : "black",
    } as StyleProp<ViewStyle>,

    imageContainer: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
  };
};

export default styles;
