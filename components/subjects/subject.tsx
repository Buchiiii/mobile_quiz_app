import {
  TouchableOpacity,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import Styles from "./subject-style";
import HtmlSubject from "../../assets/images/fluent_code-16-regular.svg";
import CSS from "../../assets/images/fluent_paint-brush-16-regular.svg";
import Javascript from "../../assets/images/fluent_javascript-16-regular.svg";
import Accessibility from "../../assets/images/fluent_accessibility-16-regular.svg";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Subject = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const styles = Styles(isDark);
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => router.push(`/quiz/HTML`)}
          style={styles.button}
        >
          <View style={styles.textContainer}>
            <View
              style={
                {
                  ...styles.imageContainer,
                  backgroundColor: "FFF1E9",
                } as StyleProp<ViewStyle>
              }
            >
              <HtmlSubject width={25} height={25} />
            </View>
            <Text style={styles.text}>HTML</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(`/quiz/CSS`)}
          style={styles.button}
        >
          <View style={styles.textContainer}>
            <View
              style={
                {
                  ...styles.imageContainer,
                  backgroundColor: "#E0FDEF",
                } as StyleProp<ViewStyle>
              }
            >
              <CSS width={25} height={25} />
            </View>
            <Text style={styles.text}>CSS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(`/quiz/JavaScript`)}
          style={styles.button}
        >
          <View style={styles.textContainer}>
            <View
              style={
                {
                  ...styles.imageContainer,
                  backgroundColor: "#EBF0FF",
                } as StyleProp<ViewStyle>
              }
            >
              <Javascript width={25} height={25} />
            </View>
            <Text style={styles.text}>Javascript</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(`/quiz/Accessibility`)}
          style={styles.button}
        >
          <View style={styles.textContainer}>
            <View
              style={
                {
                  ...styles.imageContainer,
                  backgroundColor: "#F6E7FF",
                } as StyleProp<ViewStyle>
              }
            >
              <Accessibility width={25} height={25} />
            </View>
            <Text style={styles.text}>Accessibility</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Subject;
