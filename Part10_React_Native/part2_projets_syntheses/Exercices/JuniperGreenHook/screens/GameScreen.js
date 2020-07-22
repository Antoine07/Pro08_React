import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

const GameScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Score')}>
        <Text style={styles.buttonText}>Score</Text>
      </TouchableOpacity>
    </View>
  )
}
export default GameScreen;