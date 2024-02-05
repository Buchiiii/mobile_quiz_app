import {
  styles,
  optionss,
  textt,
  optionsTextContainer,
  optionsText,
  questionText,
} from "./questions-style";
import jsonData from "../../data.json";
import { TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";
import * as Progress from "react-native-progress";
import { COLORS } from "../../constants/themes";
import { useRouter } from "expo-router";
import Check from "../../assets/images/fluent_checkmark-circle-16-regular.svg";
import Wrong from "../../assets/images/fluent_dismiss-circle-16-regular.svg";
import { useDispatch, useSelector } from "react-redux";
import { incrementScore } from "../../redux/score/score";
import { RootState } from "../../redux/store";
interface IQuestionsProps {
  name: string;
}

const options = ["A", "B", "C", "D"];
const Questions = ({ name }: IQuestionsProps) => {
  const [counter, setCounter] = useState(0);
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [choice, setChoice] = useState("");
  const [error, setError] = useState(false);
  const [last, setLast] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const data = jsonData.quizzes.filter((element) => {
    return element.title == name;
  });

  const [answer, setAnswer] = useState(``);

  const increment = () => {
    setProgress((counter + 1) / 10);
    setCounter((previous) => previous + 1);
    submit();
    setChoice("");
    setAnswer("");
  };

  const getAnswer = () => {
    setAnswer(data[0].questions[counter].answer);
  };

  const validate = (choice: string) => {
    const ans = data[0].questions[counter].answer;
    if (ans == choice) dispatch(incrementScore());
  };

  const submit = () => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <>
      <View style={styles.container}>
        {data.map((element, index) => (
          <View key={index}>
            <View style={{ marginBottom: 16 }}>
              <Text style={styles.text}>
                Question {counter + 1} of {element.questions.length}
              </Text>
            </View>
            <View style={{ marginBottom: 24 }}>
              <Text style={questionText(isDark)}>
                {element.questions[counter].question}
              </Text>
            </View>
            <View>
              <Progress.Bar
                style={styles.proggressBar}
                width={357}
                height={15}
                borderRadius={9}
                progress={progress}
                color={COLORS.primary}
                borderColor="white"
              />
            </View>
            <View
              style={{
                marginTop: 40,
                marginBottom: 12,
                flexDirection: "column",
                columnGap: 12,
              }}
            >
              {element.questions[counter].options.map((element, index) => {
                return (
                  <View key={index} style={styles.optionsContainer}>
                    <TouchableOpacity
                      disabled={isSubmitted}
                      style={optionss(
                        choice,
                        element,
                        isSubmitted,
                        isDark,
                        answer
                      )}
                      onPress={() => {
                        setChoice(element);
                        getAnswer();
                      }}
                    >
                      <View
                        style={optionsTextContainer(
                          choice,
                          element,
                          isSubmitted,
                          answer
                        )}
                      >
                        <Text style={textt(choice, element, isSubmitted)}>
                          {options[index]}
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",

                          flex: 1,
                        }}
                      >
                        <Text style={optionsText(isDark)}>{element}</Text>
                      </View>
                      <View>
                        {answer != "" ? (
                          isSubmitted ? (
                            element === answer ? (
                              <>
                                <Check />
                              </>
                            ) : (
                              <></>
                            )
                          ) : (
                            <></>
                          )
                        ) : (
                          <></>
                        )}
                        {answer != "" ? (
                          isSubmitted ? (
                            element === choice ? (
                              choice !== answer ? (
                                <>
                                  <Wrong />
                                </>
                              ) : (
                                <></>
                              )
                            ) : (
                              <></>
                            )
                          ) : (
                            <></>
                          )
                        ) : (
                          <></>
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            {!isSubmitted && (
              <>
                <View>
                  <TouchableOpacity
                    disabled={last}
                    style={styles.button}
                    onPress={() => {
                      if (choice === "") {
                        setError(true);
                      } else {
                        setIsSubmitted(true);
                        validate(choice);
                        setError(false);
                      }
                      if (counter === data[0].questions.length - 1) {
                        setProgress((counter + 1) / 10);
                        setIsSubmitted(true);
                        setLast((previous) => !previous);
                        setTimeout(() => {
                          router.push(`/result/${name}`);
                        }, 1000);
                      }
                    }}
                  >
                    <Text style={styles.buttonText}>Submit Answer</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            {isSubmitted && !last ? (
              <>
                <View>
                  <TouchableOpacity
                    disabled={!isSubmitted}
                    style={styles.button}
                    onPress={increment}
                  >
                    <Text style={styles.buttonText}>Next question</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
            {isSubmitted && last ? (
              <>
                <View>
                  <TouchableOpacity disabled={true} style={styles.button}>
                    <Text style={styles.buttonText}>Submit question</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
          </View>
        ))}

        <View
          style={{
            marginTop: 19,

            alignItems: "center",
          }}
        >
          {error ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 32,
                  width: 241,
                }}
              >
                <Wrong />

                <Text
                  style={{
                    color: "#EE5454",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginLeft: 8,
                  }}
                >
                  Please select an answer
                </Text>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </>
  );
};
export default Questions;
