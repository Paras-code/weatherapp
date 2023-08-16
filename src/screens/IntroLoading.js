import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashIntro = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds
  }, []);

  if (showSplash) {
    return (
      <View style={styles.container}>
        <Image
          source={require("./clouds/splashImage.png")}
          style={styles.image}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  image: {
    width: "1000px",
    height: "900px",
    resizeMode: "contain",
  },
});

export default SplashIntro;
