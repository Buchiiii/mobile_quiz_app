import { View, Text } from "react-native";
import Styles from "./welcome-style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Welcome = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const styles = Styles(isDark);
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Welcome to the <Text style={styles.spanText}>Frontend Quiz</Text>
        </Text>

        <Text style={styles.subjectText}>Pick a subject to get started</Text>
      </View>
    </>
  );
};

export default Welcome;
