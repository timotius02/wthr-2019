import React from "react";
import { StyleSheet, View } from "react-native";

// TODO: Create Sleet Animation
import Rain from "./Rain";

export default function Sleet(props) {
  const cloudStyle = [styles.cloud, props.style];

  return (
    <View style={cloudStyle}>
      <Rain />
    </View>
  );
}

const styles = StyleSheet.create({
  cloud: {
    fontSize: 100,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
