import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default class Messages extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false,
    };
  }

  Login = () => {
    this.setState({ visibleModal: true });
  };
  render() {
    return (
      <View style={styles._container}>
        <View style={styles._header}>
          <View style={styles._header_body}>
            <Text style={styles._header_title}>Messages</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={styles._layer}
          source={require("../../assets/bg.png")}
        >
          <TouchableOpacity style={styles._card}>
            <Image
              source={require("./../../assets/requests.png")}
              style={styles._request}
            />
            <View style={styles._card_Body}>
              <Text style={styles._heading}>No new requests 👍 </Text>
              <Text style={styles._desc}>Tap to learn how meetings works</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles._card_footer}>All Conversations</Text>
        </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _layer: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  _request: {
    height: 50,
    width: 50,
  },
  _header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    paddingTop: 40,
    alignItems: "center",
    paddingBottom: 20,
  },
  _avatar: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#b469ad",
    justifyContent: "center",
    alignItems: "center",
  },
  _header_body: {
    flex: 1,
  },
  _header_title: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
  },
  _card: {
    borderRadius: 8,
    marginTop: 30,
    overflow: "hidden",
    elevation: 10,
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  _card_footer: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 16,
    paddingVertical: 20,
    paddingLeft: 0,
  },

  _card_Body: {
    marginLeft: 10,
  },
  _heading: {
    color: "#959595",
    fontSize: 16,
    fontWeight: "bold",
  },
  _desc: {
    color: "#9a9a9a",
    fontSize: 16,
  },
});
