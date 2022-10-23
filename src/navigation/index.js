// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StartNetworking,
  JoinNewEvents,
  Signin,
  SignWithSocial,
  Home,
  Account,
  Messages,
} from "../screens";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartNetworking"
          component={StartNetworking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="JoinNewEvents"
          component={JoinNewEvents}
          options={{ title: "Join New Event" }}
        />
        <Stack.Screen
          name="SignWithSocial"
          component={SignWithSocial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
