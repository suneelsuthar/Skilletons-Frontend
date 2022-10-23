import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default class Header extends React.Component {
  render() {
    return (
      <View onPress={this.props.onPress} style={styles._header}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles._body}>{this.props.title}</View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _header: {
    borderRadius: 5,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  _body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
