import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SocialBtn, Header } from "./../../components";
import { FontAwesome } from "@expo/vector-icons";
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
      <>
        <ImageBackground
          style={styles._layer}
          source={require("../../assets/bg.png")}
        >
          <Header
            title={
              <Image
                source={require("../../assets/logo.png")}
                style={styles._logo}
              />
            }
            navigation={this.props.navigation}
          />
          <View style={styles._body}>
            <ScrollView>
              <Text style={styles._h1}>
                Meet new people at events & conferrences
              </Text>
              <Text style={styles._ins}>
                We'll check if you have an account
              </Text>
              <SocialBtn title="Sign in with Google" type="google" />
              <SocialBtn title="Sign in with LinkdIn" type="linkdin" />
              <SocialBtn title="Sign in with Facebook" type="facebook" />
              <SocialBtn title="Sign in with Apple" type="apple" />
              <TouchableOpacity
                style={styles._have_not}
                onPress={() => this.props.navigation.navigate("Signin")}
              >
                <Text style={styles._text}>
                  Or use your email to login /signup {"   "}
                </Text>
                <FontAwesome name="long-arrow-right" size={20} color="black" />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles._footer}>
            <Text style={styles._ins}>
              By signing in you agree to Brella's {"\n"}
              <Text style={styles._bold}> Terms of use </Text> and
              <Text style={styles._bold}> Privacy Policy. </Text>
            </Text>
          </View>
        </ImageBackground>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _layer: {
    flex: 1,
    backgroundColor: "white",
  },

  _logo: {
    height: 70,
    width: 120,
  },
  _h1: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
  _body: {
    padding: 20,
    flex: 1,
  },

  _ins: {
    fontStyle: "italic",
    color: "#a9a6a6",
    fontWeight: "bold",
    width: "80%",
    marginTop: 30,
    marginBottom: 15,
  },
  _have_not: {
    fontWeight: "bold",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  _text: {
    fontWeight: "bold",
    color: "#393939",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  _footer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  _bold: {
    color: "black",
  },
});
