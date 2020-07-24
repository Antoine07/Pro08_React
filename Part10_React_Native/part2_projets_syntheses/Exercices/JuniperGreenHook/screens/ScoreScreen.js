import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles';

const ScoreScreen = ({ navigation }) => {
  const { scores, status } = useSelector(state => {
    return {
      scores: state.score.data,
      status : state.score.status
    }
  });

  useEffect(() => {
    console.log(status, scores)
  }, []);

  return (
    <View style={styles.container}>
      <Text>Score</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Game</Text>
      </TouchableOpacity>
      
    </View>
  )
}
export default ScoreScreen;