import React, {useState} from 'react';
import {
  Text,
  Platform,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

interface Props {
  title: string;
  position?: 'r' | 'l';
  onPress: () => void;
}

const Fab = ({title, onPress, position = 'r'}: Props) => {
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'r' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={styles.btnOpacity}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[
          styles.fabLocation,
          position === 'r' ? styles.right : styles.left,
          // style={position === 'r' ? styles.fabLocationR : styles.fabLocationL}
        ]}>
        <View style={styles.btnOpacity}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

export default Fab;

const styles = StyleSheet.create({
  // METHOD 1
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {left: 25},
  right: {right: 25},
  // METHOD 2
  fabLocationR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  // ----------------------------
  btnOpacity: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
