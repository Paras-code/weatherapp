import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";

import ListItem from "../components/ListItems";

const DATA = [
  {
    dt_txt: "2023-06-06 12:00:00",
    main: {
      temp_max: 39,
      temp_min: 31,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-06-06 02:00:00",
    main: {
      temp_max: 39,
      temp_min: 31,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2023-06-06 04:00:00",
    main: {
      temp_max: 39,
      temp_min: 31,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      min={item.main.temp_min}
      max={item.main.temp_max}
      dt_txt={item.dt_txt}
    />
  );
  const { container, image } = styles;
  return (
    <View style={container}>
      <ImageBackground
        source={require("././clouds/Upcoming-background.jpg")}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "green",
    paddingTop: 0,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "teal",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
