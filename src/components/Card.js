import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableNativeFeedback // Android Specific
} from "react-native";

import Style from "../stylesheets/Style";

import {
  ClearNight,
  Cloudy,
  Fog,
  PartlyCloudyDay,
  PartlyCloudyNight,
  Rain,
  Sleet,
  Snow,
  Sun,
  Wind
} from "./weather_icons/";

import WeatherInfo from "./WeatherInfo";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationState: new Animated.Value(this.props.isSelected ? 1 : 0)
    };
  }

  _weatherAnimation(weather) {
    switch (weather) {
      case "clear-day":
        return <Sun />;
      case "clear-night":
        return <ClearNight />;
      case "rain":
        return <Rain />;
      case "snow":
        return <Snow />;
      case "sleet":
        return <Sleet />;
      case "wind":
        return <Wind />;
      case "fog":
        return <Fog />;
      case "cloudy":
        return <Cloudy />;
      case "partly-cloudy-day":
        return <PartlyCloudyDay />;
      case "partly-cloudy-night":
        return <PartlyCloudyNight />;
      default:
        return null;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.isSelected === this.props.isSelected &&
      nextProps.isMenuOpen === this.props.isMenuOpen &&
      nextProps.show === this.props.show
    ) {
      return false;
    }
    return true;
  }
  // TODO: add exit animation
  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps.show !== this.props.show && nextProps.show === false) {

  //   }
  // }

  render() {
    const {
      time,
      temperature,
      onPress,
      isSelected,
      icon,
      isMenuOpen,
      show,
      ...other
    } = this.props;

    const backgroundColor = Style.COLORS[time];

    const viewStyle = [styles.viewStyleBase, { backgroundColor }];

    // Weather animation slide down
    const translateY = this.props.animationState.interpolate({
      inputRange: [0, 1],
      outputRange: [-Style.DEVICE_HEIGHT, 0]
    });

    // weather info slide up
    const translateY2 = this.props.animationState.interpolate({
      inputRange: [0, 1],
      outputRange: [Style.DEVICE_HEIGHT, 0]
    });

    const flex = isSelected && !isMenuOpen ? 8 : 3;

    let newIcon;
    if (icon === "partly-cloudy-day" && time === "night") {
      newIcon = "partly-cloudy-night";
    } else if (icon === "partly-cloudy-night" && time !== "night") {
      newIcon = "partly-cloudy-day";
    } else {
      newIcon = icon;
    }
    return this.props.show ? (
      <View style={{ flex }}>
        <TouchableNativeFeedback
          onPress={this.props.onPress}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={viewStyle}>
            <View
              style={[
                styles.halfView,
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              ]}
            >
              <Animated.View style={{ transform: [{ translateY }] }}>
                {isSelected && !isMenuOpen
                  ? this._weatherAnimation(newIcon)
                  : null}
              </Animated.View>
            </View>
            <View style={[styles.halfView, { justifyContent: "center" }]}>
              <Text style={styles.header}>{time.toUpperCase()}</Text>

              <Text style={styles.degree}>
                {Math.round(temperature)}&deg; F
              </Text>

              <Animated.View
                style={{ transform: [{ translateY: translateY2 }] }}
              >
                {isSelected && !isMenuOpen ? <WeatherInfo {...other} /> : null}
              </Animated.View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  viewStyleBase: {
    flexDirection: "row",
    flex: 1,
    overflow: "hidden"
  },
  halfView: {
    flex: 1,
    paddingLeft: Style.PADDING,
    justifyContent: "center"
  },
  header: {
    color: "#fff",
    opacity: 0.4,
    fontWeight: "700",
    fontSize: Style.em(1.5)
  },
  degree: {
    color: "#fff",
    fontSize: Style.em(2.5)
  }
});
