import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SchoolProvider } from './src/store/SchoolProvider';

import HomeScreen from './src/screens/HomeScreen' ;
import StudentsScreen from './src/screens/StudentsScreen' ;
import AbscenceScreen from './src/screens/AbscenceScreen' ;

const Stack = createStackNavigator();

const Nav = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Abscence" component={AbscenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <SchoolProvider>
      <Nav />
    </SchoolProvider>
  );
}

export default App;