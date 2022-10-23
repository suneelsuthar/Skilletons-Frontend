import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";
import { Input, Header } from "./../../components";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false,
    };
  }
  // LOGIN FUNCTION
  Login = () => {
    this.setState({ visibleModal: true });
    setTimeout(() => {
      this.setState({ visibleModal: false });
      this.props.navigation.navigate("Home");
      // go to Home page
    }, 3500);
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

              <Text style={styles._label}>Email</Text>
              <Input
                placeholder="Enter email"
                style={{ textAlign: "left", height: 55 }}
              />
              <Text style={styles._ins}>
                We'll check if you have an account
              </Text>
              <TouchableOpacity
                style={styles._have_not}
                onPress={() => this.props.navigation.navigate("SignWithSocial")}
              >
                <Text style={styles._text}>Continue with Linkdin,</Text>
                <Text style={styles._text}>Google,</Text>
                <Text style={styles._text}>Apple,</Text>
                <Text style={styles._text}>Facebook </Text>
                <FontAwesome name="long-arrow-right" size={20} color="black" />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles._footer}>
            <Text style={styles._ins}>
              By signing in you agree to Brella's
              <Text style={styles._bold}> Terms of use </Text> and
              <Text style={styles._bold}> Privacy Policy. </Text>
            </Text>

            <TouchableOpacity
              onPress={this.props.onPress}
              style={[styles._btn]}
              onPress={() => this.Login()}
            >
              <Text style={styles._btn_text}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Modal
          visible={this.state.visibleModal}
          transparent={true}
          animationType="fade"
          backgroundColor="white"
        >
          <View style={styles.modalContent}>
            <Image source={require("./../../assets/mailIcon.png")} />
            <Text style={styles._heading}>Confirm your email</Text>
            <Text style={styles._message}>
              We emailed a magic link to{" "}
              <Text style={{ color: "black", fontWeight: "bold" }}>
                suneelsuther123@gmail.com{"  "}
                <Feather
                  name="edit"
                  size={20}
                  color="#2ab069"
                  onPress={() => this.setState({ visibleModal: false })}
                />
                {"\n"}{" "}
              </Text>
              <Text>Click the link to log in or signup</Text>
            </Text>
            <Text style={styles._check_text}>Check your inbox</Text>
            <Image
              source={require("../../assets/mobileIcon.png")}
              style={styles._mobile_icon}
            />
            <Text style={styles._magic_link}>Secured by Magic</Text>
          </View>
        </Modal>
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
  _label: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 16,
  },

  _ins: {
    fontStyle: "italic",
    color: "#a9a6a6",
    fontWeight: "bold",
    width: "80%",
  },
  _have_not: {
    fontWeight: "bold",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  _text: {
    fontWeight: "bold",
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
  modalContent: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    flex: 1,
    backgroundColor: "white",
    opacity: 0.95,
  },

  _heading: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 20,
  },
  _message: {
    fontSize: 18,
    color: "#333333",
    textAlign: "center",
    lineHeight: 26,
  },
  _check_text: {
    color: "#2ab069",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },
  _magic_link: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.5,
    marginTop: 40,
  },
});
