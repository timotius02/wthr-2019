import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cloudy(props) {
  const cloudStyle = [styles.cloudy, props.style];

  return (
    <Text style={cloudStyle}>
      {<MaterialCommunityIcons name="cloud" size={80} />}
    </Text>
  );
}

const styles = StyleSheet.create({
  cloudy: {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
