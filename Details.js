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
const Details = props => {
  const num = props.navigation.getParam("numbers", "No params");
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    props.navigation.setParams({ inc: increment });
  }, [number]);
  return (
    <View>
      <Text>{number}</Text>

      <Button
        title="Go to HomeScreen"
        onPress={() => props.navigation.popToTop()}
      />
      {num.map((x, i) => (
        <Text key={i}>{x}</Text>
      ))}
      <Button
        title="change header"
        onPress={() => props.navigation.setParams({ myTitle: "heeeey" })}
      />
    </View>
  );
};
Details.navigationOptions = props => ({
  headerTitle: () => (
    <Button
      color="dimgray"
      title="try"
      onPress={props.navigation.getParam("inc")}
    />
  ),
  headerStyle: {
    backgroundColor: "darkred"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "normal"
  }
});
export default Details;
