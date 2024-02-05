import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/header";
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import Questions from "../../components/questions/questions";
import { RootState, store } from "../../redux/store";
import { Provider, useSelector } from "react-redux";

const Quiz = () => {
  const param = useGlobalSearchParams();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <>
      <Provider store={store}>
        <Stack.Screen options={{ headerShown: false }} />
        <SafeAreaView
          edges={["top"]}
          style={{ flex: 1, backgroundColor: isDark ? "#3B4D66" : "white" }}
        >
          <ScrollView>
            <View>
              <Header name={`${param.name}`} />
              <Questions name={`${param.name}`} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default Quiz;
