import React, { useContext, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Picker
} from 'react-native';

import { SchoolContext, selectMention } from '../store/SchoolProvider';
import styles from '../styles';

const AbscenceScreen = ({ navigation, route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { student } = route.params;

  const attendance = state.student && state.student.id === student.id ? state.student.attendance : student.attendance;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch({ type: 'INCREMENTE_ATTENDANCE', id: student.id })}
      >
        <Text style={styles.buttonText}>Incrémente abscence (+1) </Text>
      </TouchableOpacity>
      { attendance > 0  && 
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => dispatch({ type: 'DECREMENT_ATTENDANCE', id: student.id })}
        >
          <Text style={styles.buttonText}>Incrémente abscence -+1) </Text>
        </TouchableOpacity>
      }
      <View  >
        <Text >Abscence de : { student.name} nombre d'abscence(s) : { attendance }</Text>
      </View>
    
    </SafeAreaView>
  );
}

export default AbscenceScreen;