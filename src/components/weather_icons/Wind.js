import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Wind(props) {
  const windStyle = [styles.wind, props.style];

  return (
    <Text style={windStyle}>
      <MaterialCommunityIcons name="weather-windy" size={80} />
    </Text>
  );
}

const styles = StyleSheet.create({
  wind: {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
