import { View, Text } from "react-native";
import { scoree, styles, text, totalQuestions } from "./score-card";
import HtmlSubject from "../../../assets/images/fluent_code-16-regular.svg";
import CSS from "../../../assets/images/fluent_paint-brush-16-regular.svg";
import Javascript from "../../../assets/images/fluent_javascript-16-regular.svg";
import Accessibility from "../../../assets/images/fluent_accessibility-16-regular.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface IScoreCardProps {
  name: string;
}
const ScoreCard = ({ name }: IScoreCardProps) => {
  const score = useSelector((state: RootState) => state.score.value);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const iconSwitch = (text: string) => {
    switch (text) {
      case "HTML":
        return (
          <View
            style={{ ...styles.imageContainer, backgroundColor: "#FFF1E9" }}
          >
            <HtmlSubject />
          </View>
        );

        break;

      case "CSS":
        return (
          <View
            style={{ ...styles.imageContainer, backgroundColor: "#E0FDEF" }}
          >
            <CSS />
          </View>
        );

        break;
      case "Accessibility":
        return (
          <View
            style={{ ...styles.imageContainer, backgroundColor: "#F6E7FF" }}
          >
            <Accessibility />
          </View>
        );

        break;
      case "Javascript":
        return (
          <View
            style={{ ...styles.imageContainer, backgroundColor: "#EBF0FF" }}
          >
            {" "}
            <Javascript />
          </View>
        );

        break;

      default:
        break;
    }
  };
  return (
    <>
      <View style={styles.bigContainer}>
        <View style={styles.smallContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              //width: 167,
              height: 40,
              marginBottom: 16,
            }}
          >
            {iconSwitch(name)}
            <View style={{ justifyContent: "center" }}>
              <Text style={text(isDark)}>{name}</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginBottom: 16 }}>
            <Text style={scoree(isDark)}>{score}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={totalQuestions(isDark)}>out of 10</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ScoreCard;
