import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
const Dummy = props => {
  const [timer, setTimer] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [ status , setStatus] = useState(null)

  useEffect(() => {
    setStatus(props.status)
}, []);

  useEffect(() => {

    if( timer == 5){
        clearTimeout(timeoutId);
        setTimer(0)
        setStatus(!status)
    }
    else{
        setTimeoutId(
            setTimeout(() => {
              setTimer(timer + 1);
            }, 1000)
          )
    }

  }, [timer]);

  const reset = () => {
    setTimer(10);
    
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button title={props.name} disabled={status} />
      {/* <Button color="red" title="Reset" onPress={() => reset()} /> */}

      <Text>{timer}</Text>
    </View>
  );
};

export default Dummy;
