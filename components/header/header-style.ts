import { StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Styles = (isDark: boolean) => {
  return {
    headerContainerWithName: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 24,
      paddingRight: 24,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    headerContainer: {
      paddingTop: 16,
      paddingBottom: 16,
      alignItems: "flex-end",
    } as StyleProp<ViewStyle>,

    switch: { transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] },
    imageContainer: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
    text: {
      fontSize: 18,
      fontWeight: "500",
      paddingLeft: 16,
      color: isDark ? "white" : "black",
    },

    titleContainer: {
      width: 167,
      height: 40,
      flexDirection: "row",
      alignItems: "center",
    },
  };
};

// const styles = StyleSheet.create({
//   headerContainerWithName: {
//     paddingTop: 16,
//     paddingBottom: 16,
//     paddingLeft: 24,
//     paddingRight: 24,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },

//   headerContainer: {
//     paddingTop: 16,
//     paddingBottom: 16,
//     alignItems: "flex-end",
//   },

//   switch: { transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] },
//   imageContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 6,
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "500",
//     paddingLeft: 16,
//   },

//   titleContainer: {
//     width: 167,
//     height: 40,
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });

//export default Styles;
