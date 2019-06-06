import React from "react";
import { StyleSheet, View } from "react-native";

import ClearNight from "./ClearNight";
import Cloudy from "./Cloudy";

import Style from "../../stylesheets/Style";

export default function PartlyCloudyNight(props) {
  const PartlyCloudyNightStyle = [styles.PartlyCloudyNight, props.style];

  return (
    <View style={PartlyCloudyNightStyle}>
      <ClearNight style={styles.ClearNight} />
      <Cloudy style={styles.Cloudy} />
    </View>
  );
}

const styles = StyleSheet.create({
  ClearNight: {
    top: Style.HEIGHT_UNIT / 2,
    left: -Style.HEIGHT_UNIT
  },
  Cloudy: {
    top: -Style.HEIGHT_UNIT * 1
  },
  PartlyCloudyNight: {
    justifyContent: "center",
    alignItems: "center"
  }
});
