// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import WeatherApp from "./src/containers/WeatherApp";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    );
  }
}
