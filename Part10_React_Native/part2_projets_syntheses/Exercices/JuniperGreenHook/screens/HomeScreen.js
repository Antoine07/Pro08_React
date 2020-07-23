import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { initGame } from '../actions/actions-types';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
  // Hook qui permet d'accéder à un store du combine reducer facilement à l'aide de sa clé (voir dans combineReducers pour les clés)
  const store = useSelector( state => state.juniper);
  const dispatch = useDispatch();

  useEffect(() => {

    console.log(store.numbers)

    dispatch(initGame());

  }, [store.numbers])

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
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch({ type : 'NUMBERS' })}>
        <Text style={styles.buttonText}>Test dispatc</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HomeScreen;