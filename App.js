import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // setLon(location);
    })();
  }, []);
  
  if (location) {
    console.log(location)
  }
  // const fetchWeatherData = async () => {
  //   try {
  //     const res = await fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  //     );
  //     const data = await res.json();
  //     setWeather(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError("Could not fetch weather");
  //     setLoading(false);
  //   }
  // }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
