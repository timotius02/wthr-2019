import React, { Component } from "react";
import { StyleSheet, Animated, Easing } from "react-native";

import { Feather } from "@expo/vector-icons";

export default class Sun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotateValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    var rotateSun = () => {
      this.state.rotateValue.setValue(0);

      Animated.timing(this.state.rotateValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }).start(() => {
        rotateSun();
      });
    };
    rotateSun();
  }

  render() {
    const rotate = this.state.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const { style } = this.props;
    const sunStyle = [styles.sun, style, { transform: [{ rotate }] }];

    return (
      <Animated.Text style={sunStyle}>
        <Feather name="sun" size={100} />
      </Animated.Text>
    );
  }
}

const styles = StyleSheet.create({
  sun: {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
