import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles';

const GameScreen = ({ navigation }) => {

  const { valid, computer, choices } = useSelector(state => {
    return {
      valid: [ ...state.juniper.valid.values() ],
      choices: [ ...state.juniper.choices.values() ],
      computer: state.juniper.computer
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(valid)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
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
      <View><Text>Choice computer : {computer}</Text></View>
      <View style={styles.choices}>
        <View style={styles.itemChoice}>
          <Text style={styles.paragraph} > Valeurs possibles </Text >
          <FlatList
            data={valid}
            renderItem={({ item }) => <Text style={styles.number}>{item}</Text >}
            keyExtractor={({ item, index }) => index}
          />
        </View>
        <View style={styles.itemChoice}>
          <Text style={styles.paragraph} > Gamers choices :</Text >
          <FlatList
            data={choices}
            renderItem={({ item }) => <Text style={styles.number}>{item}</Text >}
            keyExtractor={({ item, index }) => index}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
export default GameScreen;