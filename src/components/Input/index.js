import React from "react";
import { TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
export default class Input extends React.Component {
  render() {
    return (
      <TextInput
        style={[styles._text_input, this.props.style]}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}

let styles = StyleSheet.create({
  _text_input: {
    backgroundColor: "#f5f3f3",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
