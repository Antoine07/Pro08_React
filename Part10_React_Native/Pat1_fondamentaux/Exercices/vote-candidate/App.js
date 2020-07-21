import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

// source de vérité à la manière Redux
// Attention ici c'est du React pas du Redux ...
const initialState = {
  candidates: [],
  choices: [],
  count: 0,
  status : false
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'CHOICE_1':
    case 'CHOICE_2':

      const { id, choice } = action;

      return {
        ...state,
        choices: [...state.choices, { choice: choice, id: id }],
        count: state.count + 1
      }

    case "LOAD_CANDIDATES":

      return { ...state, candidates: action.candidates }

    case 'RESET':

      return  { 
        ...initialState, 
        status : !state.status 
      };

    default:
      return state;
  }
}

const Favorite = ({ choices, reset }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={choices}
          renderItem={({ item }) => <Text style={styles.btnStyle}>{item.choice}</Text>}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity onPress={reset} >
          <Text style={styles.btnStylReset}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, candidates, choices, status } = state;

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch("http://192.168.1.113:3000/candidates");
      const candidates = await results.json();

      dispatch({ type: "LOAD_CANDIDATES", candidates });
    }

    fetchData();
// on watch si le state change de cette variable => on ré-exécute alors le useEffect
  }, [ status ]); 


  if (candidates && count < candidates.length) {

    const { choice_1, choice_2, id } = candidates[count];
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity 
              onPress={() => dispatch({ type: 'CHOICE_1', choice: choice_1, id: id })} 
            >
            <Text style={styles.btnStyle}>
              {choice_1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => dispatch({ type: 'CHOICE_2', choice: choice_2, id: id })} 
          >
            <Text style={styles.btnStyle}>
              {choice_2}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Favorite 
      choices={choices} 
      reset={() => dispatch({ type: 'RESET' })} 
    />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    // textAlign: 'center',
    marginTop: 50
  },
  btnStyle: {
    color: 'black',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    backgroundColor: '#f9c2ff'
  },
  btnStylReset: {
    color: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    backgroundColor: '#333'
  }
});

export default App;
