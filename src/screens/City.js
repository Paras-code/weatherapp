import React from "react";
import IconText from "../components/IconText";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
    imageLayout,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("./clouds/4007.gif")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"skyblue"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <View style={{ marginRight: 10 }}>
            <IconText
              iconName={"sunrise"}
              iconColor={"yellow"}
              bodyText={moment.unix(sunrise).format("h:mm:ss a")}
              bodyTextStyles={riseSetText}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <IconText
              iconName={"sunset"}
              iconColor={"orange"}
              bodyText={moment.unix(sunset).format("h:mm:ss a")}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 0,
    marginTop: 0,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "skyblue",
  },
  riseSetWrapper: {
    justifyContent: "center",
    marginTop: 40,
  },
  riseSetText: {
    fontSize: 15,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  sunsetMargin: {
    marginLeft: 10,
  },
});
export default City;
