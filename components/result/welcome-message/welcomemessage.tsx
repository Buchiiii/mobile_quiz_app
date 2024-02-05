import { View, Text } from "react-native";
import { styles, subjectText, text } from "./welcome-message-style";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const WelcomeMessage = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={text(isDark)}>Quiz completed</Text>

        <Text style={subjectText(isDark)}>You scored...</Text>
      </View>
    </>
  );
};

export default WelcomeMessage;
