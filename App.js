import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Time from "./component/time";

export default class App extends React.Component {
  time = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Time />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});
