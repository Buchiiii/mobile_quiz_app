import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../../constants/themes";

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24,
  },

  text: {
    color: COLORS.smallText,
    fontStyle: "italic",
  },

  proggressBar: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0.2, height: 0.2 },
  },

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

  optionsContainer: {
    //width: 327,
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 12,
  },
});

const optionss = (
  choice: string,
  element: string,
  isSubmitted: boolean,
  isDark: boolean,

  answer: string
): StyleProp<ViewStyle> => {
  return {
    borderColor:
      choice === element
        ? isSubmitted
          ? choice === answer
            ? "green"
            : "red"
          : COLORS.primary
        : isDark
        ? "#3B4D66"
        : "white",
    borderWidth: 3,
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: isDark ? "#3B4D66" : "white",
  };
};

const optionsTextContainer = (
  choice: string,
  element: string,
  isSubmitted: boolean,

  answer: string
): StyleProp<ViewStyle> => {
  return {
    marginRight: 16,
    height: 40,
    width: 40,

    backgroundColor:
      choice === element
        ? isSubmitted
          ? choice === answer
            ? "green"
            : "red"
          : COLORS.primary
        : "#F4F6FA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  };
};

const textt = (answer: string, element: string, isPressed: boolean) =>
  ({
    fontSize: 18,
    fontWeight: "500",
    color: answer === element ? "#fff" : COLORS.greyNavy,
  } as StyleProp<ViewStyle>);

const optionsText = (isDark: boolean) =>
  ({
    fontSize: 18,
    fontWeight: "500",
    color: !isDark ? "#313E51" : "#fff",
  } as StyleProp<ViewStyle>);

const questionText = (isDark: boolean) =>
  ({
    color: isDark ? "#fff" : "#313E51",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
  } as StyleProp<ViewStyle>);
export {
  styles,
  optionss,
  textt,
  optionsTextContainer,
  optionsText,
  questionText,
};
