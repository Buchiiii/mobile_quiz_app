import { TouchableOpacity, Text } from "react-native";
import styles from "./button";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { resetScore } from "../../../redux/score/score";

const Buttonn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/");
          dispatch(resetScore());
        }}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </>
  );
};

export default Buttonn;
