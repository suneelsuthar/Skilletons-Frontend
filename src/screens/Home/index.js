import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default class SignWithSocial extends React.Component {
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
          <TouchableOpacity
            style={styles._avatar}
            onPress={() => this.props.navigation.navigate("Account")}
          >
            <Image
              source={{
                uri: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
              }}
              style={styles.user_img}
            />
          </TouchableOpacity>
          <View style={styles._header_body}>
            <Text style={styles._header_title}>Events</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Messages")}
          >
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={styles._layer}
          source={require("../../assets/bg.png")}
        >
          <TouchableOpacity
            style={styles._card}
            onPress={() => this.props.navigation.navigate("JoinnewEvents")}
          >
            <Image
              source={require("./../../assets/homebg.png")}
              style={styles._homeBg}
            />
            <Text style={styles._card_footer}>Join New Events</Text>
          </TouchableOpacity>
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
  _homeBg: {
    width: "100%",
    height: 150,
  },
  _header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    paddingTop: 40,
    alignItems: "center",
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
  },
  _card_footer: {
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 20,
  },
  user_img: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
});
