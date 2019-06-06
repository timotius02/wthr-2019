import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ClearNight(props) {
  const clearNightStyle = [styles.clearNight, props.style];

  return (
    <Text style={clearNightStyle}>
      <MaterialCommunityIcons name="weather-night" size={100} />
    </Text>
  );
}

const styles = StyleSheet.create({
  clearNight: {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
