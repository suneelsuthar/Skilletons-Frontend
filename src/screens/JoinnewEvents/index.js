import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input } from "./../../components";
export default class JoinNewEvents extends React.Component {
  constructor() {
    super();
  }

  Login = () => {};
  render() {
    return (
      <View style={styles._layer}>
        <View style={styles._body}>
          <ScrollView>
            <Text style={styles._label}>Enter the event's join code</Text>
            <Text style={styles._ins}>JOIN CODE</Text>
            <Input
              placeholder="Enter join code"
              style={{ textAlign: "left", height: 55 }}
            />
          </ScrollView>
        </View>
        <View style={styles._footer}>
          <TouchableOpacity
            onPress={this.props.onPress}
            style={[styles._btn]}
            onPress={() => this.Login()}
          >
            <Text style={styles._btn_text}>JOIN EVENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _layer: {
    flex: 1,
    backgroundColor: "white",
  },

  _body: {
    padding: 20,
    flex: 1,
  },
  _label: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 16,
  },

  _ins: {
    color: "#a9a6a6",
    fontWeight: "bold",
    marginTop: 40,
  },

  _footer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  _btn: {
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
    backgroundColor: "#2ab069",
    width: "100%",
    elevation: 1,
  },
  _btn_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
