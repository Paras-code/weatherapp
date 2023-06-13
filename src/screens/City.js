import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./clouds/City-background.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>Kolkata</Text>
        <Text style={[styles.countryName, styles.cityText]}>India</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"skyblue"}
            bodyText={"1.53 crores"}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"yellow"}
            bodyText={"04:51:00am"}
            bodyTextStyles={styles.riseSetText}
          />
          <View style={styles.sunsetMargin}>
            <IconText
              iconName={"sunset"}
              iconColor={"orange"}
              bodyText={"06:19:00pm"}
              bodyTextStyles={styles.riseSetText}
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
    marginTop:0,
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
    marginLeft: 90,
  },
});

export default City;
