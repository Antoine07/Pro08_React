import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import { useSelector, useDispatch } from 'react-redux';
 
import HomeScreen from './screens/HomeScreen' ;
import GameScreen from './screens/GameScreen' ;
import ScoreScreen from './screens/ScoreScreen' ;

const store = createStore(reducer);

const Stack = createStackNavigator();

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
  return (
    <Provider store={store} >
      <Nav />
    </Provider >
  );
}

export default App;