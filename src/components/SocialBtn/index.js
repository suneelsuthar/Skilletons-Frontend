import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import FacebookIcon from "./../../assets/facebook.png";
import GoogleIcon from "./../../assets/google.png";
import linkdinIocn from "./../../assets/linkdin.png";
import AppleIcon from "./../../assets/apple.png";

export default class SocialBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles._btn, { backgroundColor: this.props.bg }]}
      >
        {this.props.type === "google" && (
          <Image source={GoogleIcon} style={styles._logo} />
        )}
        {this.props.type === "linkdin" && (
          <Image source={linkdinIocn} style={styles._logo} />
        )}
        {this.props.type === "facebook" && (
          <Image source={FacebookIcon} style={styles._logo} />
        )}
        {this.props.type === "apple" && (
          <Image source={AppleIcon} style={styles._logo} />
        )}

        <Text style={[styles._btn_text]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  _btn: {
    backgroundColor: "#f5f3f3",
    borderRadius: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    height: 60,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e2e2e2",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  _btn_text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  _logo: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
