import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { setChoice, sendChoice, initGame, incrementAsync } from '../actions/actions-types';

import styles from '../styles';

const GameScreen = ({ navigation }) => {

  // useSelector permet de récupérer le store ou une partie du store
  // Par décomposition vous pouvez assigner les valeurs (plus pratique)
  const { valid, computer, choices, player, message, counter } = useSelector(state => {
    return {
      valid: [...state.juniper.valid.values()], // Permet de récupérer les valeurs uniquement du Map dans le store
      choices: [...state.juniper.choices.values()],
      computer: state.juniper.computer,
      player: state.juniper.player,
      message: state.juniper.message,
      counter: state.counter.count
    }
  });

  // Hook des dispatch => permet d'exécuter les dispatch dans l'app ils se connecteront aux différents reducer en fonction des action.types
  // demandés
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) alterBox();
  }, [message]);

  useEffect(() => {
    dispatch(incrementAsync(false));
  }, []);

  const onValid = () => {
    dispatch(sendChoice());
  }

  const stat = () => {

    return (
      <View style={styles.choices}>
        <View style={styles.itemChoice}>
          <Text style={styles.paragraph} > Valeurs possibles (debug) </Text >
          <FlatList
            data={valid}
            renderItem={({ item }) => <Text style={styles.number}>{item}</Text >}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.itemChoice}>
          <Text style={styles.paragraph} > Gamers choices (debug) </Text >
          <FlatList
            data={choices}
            renderItem={({ item }) => <Text style={styles.number}>{item}</Text >}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    )
  }

  // Alert marche uniquement sur le téléphone
  const alterBox = () =>
    Alert.alert(
      "Alert Title",
      message,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


  const play = () => {

    // Jeu terminé, on peut ré-initialiser le jeu
    if (valid.length === 0)
      return (
        <>
          <Text style={styles.paragraph} >Que souhaitez faire ?</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => dispatch(initGame())}>
            <Text style={styles.buttonText}>Replay</Text>
          </TouchableOpacity>
        </>
      )

    return (
      <View style={styles.content}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => dispatch(setChoice(text))}
          keyboardType='number-pad'
          value={player}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onValid()}
        >
          <Text style={styles.paragraph} >Valider</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const getMessage = () => message ? <Text>{message}</Text> : null;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
      <Text style={styles.paragraph} >Welcome, time : {counter}(s) </Text>
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
      {play()}
      <View><Text style={styles.paragraph}>Choice computer : {computer}</Text></View>
      {getMessage()}
      {stat()}
    </SafeAreaView>
  )
}
export default GameScreen;