import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highlow,
    highlowContainer,
    description,
    message,
    bodyContainer,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={wrapper}>
        <Fontisto name="day-sunny" size={90} color="black" />
        <Text style={temp}>35</Text>
        <Text style={feels}>Feels like 34</Text>
        <RowText
          messageOne={"High:40"}
          messageTwo={"Low:30"}
          containerStyles={highlowContainer}
          messageOneStyles={[highlow, { marginRight: 10 }]}
          messageTwoStyles={highlow}
        />
        <RowText
          messageOne={"Its sunny day"}
          messageTwo={weatherType["Thunderstorm"].message}
          containerStyles={bodyContainer}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "lightyellow",
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  temp: {
    color: "darkblue",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "green",
  },
  highlow: {
    fontSize: 20,
  },
  highlowContainer: {
    flexDirection: "row",
  },
  bodyContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 1,
    alignItems: "center",
  },
  description: {
    fontSize: 43,
    color: "black",
  },
  message: {
    fontSize: 30,
    color: "black",
  },
});

export default CurrentWeather;
