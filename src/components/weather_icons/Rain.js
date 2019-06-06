import React, { Component } from "react";
import { StyleSheet, Animated, Easing, Platform, View } from "react-native";

import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Rain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waves: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ]
    };
  }

  componentDidMount() {
    const animate = () => {
      const animations = this.state.waves.map(wave => {
        return Animated.timing(wave, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease
        });
      });
      Animated.stagger(300, animations).start(() => {
        this.state.waves.forEach(wave => {
          wave.setValue(0);
        });
        animate();
      });
    };
    animate();
  }

  render() {
    const { waves } = this.state;

    const rainWaves = waves.map((wave, index) => {
      const right = wave.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 55]
      });

      const bottom = wave.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -90]
      });

      const opacity = wave.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      });

      const rainStyle = [styles.raindrops, { right, bottom, opacity }];

      return (
        <Animated.Text key={index} style={rainStyle}>
          {[0, 1, 2, 3, 4].map(index => (
            <SimpleLineIcons key={index} name="drop" size={15} />
          ))}
        </Animated.Text>
      );
    });

    return (
      <View style={this.props.style}>
        <MaterialCommunityIcons name="cloud" size={80} color="#fff" />
        {rainWaves}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  raindrops: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0)",
    color: "#fff"
  }
});
