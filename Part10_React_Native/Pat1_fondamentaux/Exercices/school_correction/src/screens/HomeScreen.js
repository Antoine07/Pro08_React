import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Students')}>
        <Text style={styles.buttonText}>Students</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HomeScreen;