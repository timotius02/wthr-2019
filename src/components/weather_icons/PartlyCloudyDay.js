import React from "react";
import { StyleSheet, View } from "react-native";

import Sun from "./Sun";
import Cloudy from "./Cloudy";
import Style from "../../stylesheets/Style";

export default function PartlyCloudyDay(props) {
  const PartlyCloudyDayStyle = [styles.PartlyCloudyDay, props.style];

  return (
    <View style={PartlyCloudyDayStyle}>
      <Sun style={styles.Sun} />
      <Cloudy style={styles.Cloudy} />
    </View>
  );
}

const styles = StyleSheet.create({
  Sun: {
    top: Style.HEIGHT_UNIT / 2,
    left: -Style.HEIGHT_UNIT
  },
  Cloudy: {
    top: -Style.HEIGHT_UNIT * 1.5
  },
  PartlyCloudyDay: {
    justifyContent: "center",
    alignItems: "center"
  }
});
