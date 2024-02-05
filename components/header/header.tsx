import { View, Text, Image, Switch, StyleProp, ViewStyle } from "react-native";
import { Styles } from "./header-style";
import { useEffect, useState } from "react";
import { COLORS } from "../../constants/themes";
import MoonLight from "../../assets/images/icon-moon-light.svg";
import SunLight from "../../assets/images/icon-sun-light.svg";
import { SvgProps } from "react-native-svg";
import HtmlSubject from "../../assets/images/fluent_code-16-regular.svg";
import CSS from "../../assets/images/fluent_paint-brush-16-regular.svg";
import Javascript from "../../assets/images/fluent_javascript-16-regular.svg";
import Accessibility from "../../assets/images/fluent_accessibility-16-regular.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeTheme } from "../../redux/apptheme/apptheme";
import { StatusBar, setStatusBarStyle } from "expo-status-bar";

interface IHeaderProps {
  name?: string;
  icon?: React.FC<SvgProps>;
}
const Header = ({ name, icon }: IHeaderProps) => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    dispatch(changeTheme());
    console.log(isDark);
  };

  useEffect(() => {
    if (isDark === true) {
      setStatusBarStyle("light");
    } else {
      setStatusBarStyle("dark");
    }
  }, [isDark]);

  const styles = Styles(isDark);

  const iconSwitch = (text: string) => {
    switch (text) {
      case "HTML":
        return (
          <View
            //style={{ ...styles.imageContainer, backgroundColor: "#FFF1E9" }}
            style={
              {
                ...styles.headerContainerWithName,
                backgroundColor: "FFF1E9",
              } as StyleProp<ViewStyle>
            }
          >
            <HtmlSubject />
          </View>
        );

        break;

      case "CSS":
        return (
          <View
            style={
              {
                ...styles.imageContainer,
                backgroundColor: "#E0FDEF",
              } as StyleProp<ViewStyle>
            }
          >
            <CSS />
          </View>
        );

        break;
      case "Accessibility":
        return (
          <View
            style={
              {
                ...styles.imageContainer,
                backgroundColor: "#F6E7FF",
              } as StyleProp<ViewStyle>
            }
          >
            <Accessibility />
          </View>
        );

        break;
      case "Javascript":
        return (
          <View
            style={
              {
                ...styles.imageContainer,
                backgroundColor: "#EBF0FF",
              } as StyleProp<ViewStyle>
            }
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
      <View style={{}}>
        {name ? (
          <>
            <View
              style={styles.headerContainerWithName as StyleProp<ViewStyle>}
            >
              <View style={styles.titleContainer as StyleProp<ViewStyle>}>
                {iconSwitch(name)}
                <Text style={styles.text as StyleProp<ViewStyle>}>{name}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  height: 40,

                  alignItems: "center",
                }}
              >
                <SunLight
                  width={23}
                  height={23}
                  fill={"#fff"}
                  stroke={ isDark ? "white" : "#626C7F"}
                  strokeWidth={0.4}
                />

                <Switch
                  style={styles.switch}
                  trackColor={{ false: COLORS.primary, true: COLORS.primary }}
                  ios_backgroundColor={COLORS.primary}
                  onValueChange={toggleSwitch}
                  value={isDark}
                />

                <MoonLight
                  width={23}
                  height={23}
                  fill={"#fff"}
                  stroke={ isDark ? "white" : "#626C7F"}
                  strokeWidth={0.4}
                />
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.headerContainer}>
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  alignItems: "center",
                }}
              >
                <SunLight
                  width={23}
                  height={23}
                  fill={"#fff"}
                  stroke={ isDark ? "white" : "#626C7F"}
                  strokeWidth={0.4}
                  
                />

                <Switch
                  style={styles.switch as StyleProp<ViewStyle>}
                  trackColor={{ false: COLORS.primary, true: COLORS.primary }}
                  ios_backgroundColor={COLORS.primary}
                  onValueChange={toggleSwitch}
                  value={isDark}
                />

                <MoonLight
                  width={23}
                  height={23}
                  fill={"#fff"}
                  stroke={ isDark ? "white" : "#626C7F"}
                  strokeWidth={0.4}
               
                />
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Header;
