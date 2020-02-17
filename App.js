//@refresh reset
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  Alert,
  TextInput
} from "react-native";
import db from "./db";
import "firebase/firestore";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import Details from "./Details";
import Game from "./Game";
import Dummy from "./Dummy";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: Details
    },
    Game: {
      screen: Game
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "darkred"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal"
      }
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />

    // <View>
    //   <AppContainer />
    //   <Dummy name="A" status={true} />
    //   <Dummy name="B" status={false}/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

    // display: "flex",
    // alignItems: "center"
    // justifyContent: "space-around",
    // flexDirection: "row"
  },
  item: {
    borderColor: "black",
    borderWidth: 1.1,
    // padding: 19,
    marginLeft: "auto",
    marginRight: "auto",
    width: 138,
    height: 138

    // flexDirection: "column",
    // flexWrap: "nowrap"
  },
  itemDis: {
    borderColor: "black",
    borderWidth: 1.1,
    opacity: 0.5,
    marginLeft: "auto",
    marginRight: "auto",
    width: 138,
    height: 138

    // flexDirection: "column",
    // flexWrap: "nowrap"
  }
});
