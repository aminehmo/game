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

const Game = props => {
  const [random, setRandom] = useState([]);
  const [sum, setSum] = useState(0);
  const [flags, setFlags] = useState([]);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const [timer, setTimer] = useState(15);
  const [timeoutId, setTimeoutId] = useState(null);
  const [status, setStatus] = useState(true);
  const name = props.navigation.getParam("name", "No params");

  const generateRandomNumber = () => {
    let random = [];
    for (let i = 0; i < 6; i++) {
      random.push(Math.floor(Math.random() * 10));
      console.log(random);
    }
    setRandom(random);

    let answer = [];
    for (let i = 0; i < 4; i++) {
      const tempAnswer = Math.floor(Math.random() * 6);
      if (answer.includes(tempAnswer) === false) {
        answer.push(tempAnswer);
      } else {
        i--;
      }
    }
    let tempResult = 0;
    for (let i = 0; i < answer.length; i++) {
      tempResult += random[answer[i]];
    }
    setResult(tempResult);
  };
  const changeSomething = () => {
    console.log("pressed enter");
  };

  const reset = () => {
    generateRandomNumber();
    setSum(0);
    setFlags([]);
    // setUsername("");
    setCount(0);

    setTimer(15);

    setStatus(true);
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  useEffect(() => {
    showAlert();
  }, [count]);

  useEffect(() => {
    timer > 0 && status === true
      ? setTimeoutId(
          setTimeout(() => {
            setTimer(timer - 1);
          }, 1000)
        )
      : timer === 0
      ? alert("You Lost Times Up!") && setStatus(false) && clearTimeout()
      : null;
  }, [timer]);
  const addNumber = (num, index) => {
    if (count < 4) {
      let counting = count;
      counting++;
      setCount(counting);
      let tempAdd = sum;
      tempAdd += num;
      setSum(tempAdd);
      let tempDis = flags;
      tempDis[index] = true;
      setFlags(tempDis);
    }
  };

  const showAlert = () => {
    if (count === 4) {
      if (sum === result) {
        alert("You win...");
        db.collection("users").add({
          name,
          timer
        });
      } else {
        alert("You lost...");
      }
      setStatus(false);
    }
  };

  return (
    <View
      style={
        (styles.container,
        count === 4
          ? {
              backgroundColor: sum === result ? "darkgreen" : "darkred"
            }
          : { backgroundColor: timer === 0 ? "darkred" : "white" })
      }
    >
      <View
        style={{
          padding: 10,
          marginTop: 0.1,
          textAlign: "center"
        }}
      >
        <View>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Text>player name: {name}</Text>
          </View>
          <View style={{ flexDirection: "row-reverse", marginLeft: 10 }}>
            <Text>Timer: {timer}</Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Answer = {result}
        </Text>
      </View>
      <View
        style={{
          borderColor: "black",
          padding: 10,
          marginBottom: 10,
          marginTop: 0.1,
          textAlign: "center",
          borderWidth: 1.1
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 18 }}>Sum: {sum}</Text>
      </View>
      <View style={{ marginBottom: 8 }}>
        <Button color="black" title="Reset" onPress={() => reset()} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          height: "100%"
        }}
      >
        {random.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              addNumber(
                item,
                index
                // db.collection("game").add({
                //   random
                // })
                // db.collection("flags").add({
                //   f: flags[index]
                // })
              )
            }
            disabled={flags[index]}
            key={index}
            style={!flags[index] ? styles.item : styles.itemDis}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 50,
                fontSize: 30
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

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
export default Game;
