import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header/header";
import { ImageBackground, ScrollView, StatusBar, View } from "react-native";
import Welcome from "../components/welcome/welcome";
import styles from "./index-style";
import Subject from "../components/subjects/subject";
import Background from "../assets/images/pattern-background-mobile-light.svg";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "../redux/store";
import { Stack } from "expo-router";

const Home = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  return (
    <>

      <Provider store={store}>
        <SafeAreaView
          edges={["top"]}
          style={{ flex: 1, backgroundColor: isDark ? "#3B4D66" : "white" }}
        >
          <Stack.Screen options={{ headerShown: false }} />
          <ScrollView style={{ flex: 1 }}>
            <ImageBackground
              source={{ uri: "http://www.w3.org/2000/svg" }}
              // style={{ width: 400, height: 300 }}
            >
              <View style={styles.container}>
                <Header />
                <Welcome />
                <Subject />
              </View>
            </ImageBackground>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default Home;
