import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/header";
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import WelcomeMessage from "../../components/result/welcome-message/welcomemessage";
import ScoreCard from "../../components/result/score-card/scorecard";
import Buttonn from "../../components/result/button/buttonn";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";

const Result = () => {
  const param = useGlobalSearchParams();
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  return (
    <>
      <Provider store={store}>
        <SafeAreaView
          edges={['top']}
          style={{ flex: 1, backgroundColor: isDark ? "#3B4D66" : "white" }}
        >
          <Stack.Screen options={{ headerShown: false }} />
          <ScrollView style={{flex: 1}}>
            <View>
              <Header name={`${param.name}`} />
              <View style={{ paddingLeft: 24, paddingRight: 24 }}>
                <WelcomeMessage />
                <ScoreCard name={`${param.name}`} />
                <Buttonn />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default Result;
