import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import thunk from 'redux-thunk';

// pour la persistance des données 
import { persistStore } from 'redux-persist'; // module permettant de faire de la persistance
import storage from 'redux-persist/lib/storage'; // le storage utilisé pour la persistance
import { PersistGate } from 'redux-persist/es/integration/react'; // ré-hydrater les states de ton redux

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ScoreScreen from './screens/ScoreScreen';

const Stack = createStackNavigator();

// middleware se place trigger de Redux 
// il permet d'avoir une logique type Middleware pour exécuter du code en fonction de certaine action par exemple
// Vous pouvez également mettre en place un log pour récupérer des informations avant et après
// Faire attention au effet de boucle si vous lancez un dispatch dans le middleware car il sera alors ré-exécuté
const score = store => next => action => {
  //console.log('will dispatch', action);
  const returnValue = next(action);
  const { juniper, score } = store.getState();
  //console.log('state after dispatch', juniper, score);

  if (juniper.valid.size === 0 && score.status === true) {
    store.dispatch({ type: 'SAVE_SCORE', data: juniper.choices })
  }

  return returnValue;
}

// plusieurs middleware dans un tableau
const middlewares = [ score, thunk ];

const store = createStore(
  reducer, applyMiddleware( ...middlewares )
);

const Nav = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  let persistor = persistStore(store);
  persistor.purge(); // pour le dev on reload le store pour ré-hydrater l'app

  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <Nav />
      </PersistGate>
    </Provider >
  );
}

export default App;