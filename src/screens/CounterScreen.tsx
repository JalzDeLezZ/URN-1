import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Fab from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {contador}</Text>
      <Button
        title="Reset"
        onPress={() => {
          setContador(0);
        }}
      />
      <Fab
        title="+1"
        position="r"
        onPress={() => {
          setContador(contador + 1);
        }}
      />
      <Fab
        title="-1"
        position="l"
        onPress={() => {
          setContador(contador - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 46,
    textAlign: 'center',
    marginBottom: 30,
  },
});
