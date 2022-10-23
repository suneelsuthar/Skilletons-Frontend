import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles._btn, { backgroundColor: this.props.bg }]}
      >
        <Text style={[styles._btn_text, { color: this.props.color }]}>
          {this.props.title}
        </Text>
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
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2ab069",
    elevation: 1,
  },
  _btn_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
