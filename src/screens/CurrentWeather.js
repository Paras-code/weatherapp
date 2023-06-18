import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highlow,
    highlowContainer,
    description,
    message,
    bodyContainer,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={90}
          color="white"
        />
        <Text style={tempStyles}>{(parseFloat(temp) - 273).toFixed(2)}° </Text>
        <Text style={feels}>
          {`Feels like ${(parseFloat(feels_like) - 273).toFixed(2)}`}°{" "}
        </Text>
        <RowText
          messageOne={`High:${(parseFloat(temp_max) - 273).toFixed(2)}° `}
          messageTwo={`Low:${(parseFloat(temp_min) - 273).toFixed(2)}° `}
          containerStyles={highlowContainer}
          messageOneStyles={[highlow, { marginRight: 10 }]}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyContainer}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  tempStyles: {
    color: "white",
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
    fontSize: 25,
    color: "black",
  },
});

export default CurrentWeather;
