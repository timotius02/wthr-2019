import React from "react";
import { StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Fog(props) {
  const fogStyle = [styles.fog, props.style];

  return (
    <Text style={fogStyle}>
      <MaterialCommunityIcons name="weather-fog" size={80} />
    </Text>
  );
}

const styles = StyleSheet.create({
  fog: {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
