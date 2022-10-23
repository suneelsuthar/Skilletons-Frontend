import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Button, Input } from "./../../components";
export default class StartNetworking extends React.Component {
  render() {
    return (
      <View style={styles._layer}>
        <ScrollView>
          <Image
            source={require("../../assets/conferrence.png")}
            style={styles._conferrence_img}
          />
          <View style={styles._body}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles._logo}
            />
            <Text style={styles._h1}>
              Meet new people at events and conferrence
            </Text>
            <Text style={styles._label}>ENV:production</Text>
            <Input placeholder="Join code" />
            <Button title="Start networking" bg="#2ab069" color="white" />
            <Text style={styles._or}>or</Text>
            <Button
              title="Sign in"
              bg="white"
              color="#2ab069"
              onPress={() => this.props.navigation.navigate("Signin")}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _layer: {
    flex: 1,
    backgroundColor: "white",
  },
  _conferrence_img: {
    height: 250,
    width: "100%",
  },
  _logo: {
    height: 80,
    width: 120,
  },
  _h1: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  _body: {
    padding: 20,
  },
  _label: {
    color: "grey",
    fontWeight: "bold",
    paddingVertical: 10,
  },

  _or: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: "#a9a6a6",
  },
});
