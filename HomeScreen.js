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
const HomeScreen = props => {
  const [username, setUsername] = useState("");

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  return (
    <View>
      <TextInput
        style={{
          height: 5,
          marginTop: "10%",
          marginBottom: "10%",
          width: "30%",
          marginLeft: "30%",
          textAlign: "center",
          borderWidth: 2
        }}
        placeholder=" Enter a username"
        onSubmitEditing={() => changeSomething()}
        onChangeText={Username => setUsername(Username)}
        value={username}
        prompt="choose a country"
      />
      <View style={{ width: "50%", height: 30, marginLeft: "25%" }}>
        <Button
          color="darkgreen"
          title="Start The Game"
          onPress={() => props.navigation.navigate("Game", { name: username })}
        />
      </View>
      <View style={{ marginTop: "70%" }}>
        <Button
          color="darkred"
          title="Go to Details"
          onPress={() => props.navigation.navigate("Details", { numbers: arr })}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
