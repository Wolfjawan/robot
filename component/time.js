import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";
import {
  CircularProgress,
  AnimatedCircularProgress
} from "react-native-circular-progress";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      date: 0,
      seconds: 0,
      minutes: 0,
      hour: 0
    };
    this.timer();
  }

  timer = () => {
    setInterval(() => {
      const dateNow = new Date();
      const time = dateNow.toLocaleTimeString();
      const date = dateNow.getDate();
      const seconds = dateNow.getSeconds();
      const minutes = dateNow.getMinutes();
      const hour =
        ((dateNow.getHours() % 12 || 12) < 10 ? "0" : "") +
        (dateNow.getHours() % 12 || 12);
      this.setState({ time, seconds, minutes, hour, date });
    }, 1000);
  };
  render() {
    const { time, hour, seconds, minutes, date } = this.state;
    const newSeconds = seconds * 1.666666666666;
    const newMinutes = minutes * 1.666666666666 + 1.5 * (seconds / 60);
    const newHour = hour * 8.33 + 1.5 * (minutes / 60);
    return (
      <View style={styles.viem}>
        <Text style={styles.time}>{time}</Text>

        <View>
          <Image style={styles.clock} source={require("../images/clock.png")} />
          <CircularProgress
            style={styles.seconds}
            size={300}
            width={15}
            fill={newSeconds}
            rotation={360}
            tintColor="#00e0ff"
          />
          <CircularProgress
            style={styles.minutes}
            size={190}
            width={20}
            fill={newMinutes}
            rotation={360}
            tintColor="#099"
          />
          <CircularProgress
            style={styles.hour}
            size={150}
            width={40}
            fill={newHour}
            rotation={360}
            tintColor="#f00"
          >
            {() => <Text style={styles.date}>{date}</Text>}
          </CircularProgress>
        </View>
      </View>
    );
  }
}
export default Time;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  time: {
    paddingTop: 20,
    paddingLeft: 40,
    height: 150,
    fontSize: 60,
    color: "#000",
    alignItems: "center"
  },
  seconds: {
    position: "absolute",
    top: 0,
    right: 0
  },
  minutes: {
    position: "absolute",
    top: 55,
    right: 55
  },
  hour: {
    position: "absolute",
    top: 75,
    right: 75
  },
  clock: {
    width: 300,
    height: 300
  },
  date: {
    position: "absolute",
    fontSize:44,
  }
});
