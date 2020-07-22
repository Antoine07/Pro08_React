import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SchoolProvider } from './src/store/SchoolProvider';
import StudentsScreen from './src/screens/StudentsScreen';

import AbscenceScreen from './src/screens/AbscenceScreen' ;


const HomeScreen = ({ navigation })  => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Students"
        onPress={() => navigation.navigate('Students')}
      />
    </View>
  );
}

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

const App = () => ( <SchoolProvider><Nav /></SchoolProvider>);

export default App;