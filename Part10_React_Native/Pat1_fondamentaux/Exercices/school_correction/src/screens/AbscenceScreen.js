import React, { useContext } from 'react';
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

  // dans le chemin on récupère la variable student mais il faudra se porter sur le state.student pour watcher les changements dans ce composant
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
      { attendance > 0 &&
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => dispatch({ type: 'DECREMENT_ATTENDANCE', id: student.id })}
        >
          <Text style={styles.buttonText}>Incrémente abscence (-1) </Text>
        </TouchableOpacity>
        }
      { /** TODO pour la gestion des mentions  */}
      <View  >
        <Text >Abscence de : {student.name} nombre d'abscence(s) : {attendance}</Text>
      </View>
      <Picker
        selectedValue={ selectMention(state.behaviours, student.id) }
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => dispatch({ type :'MENTION' , student : { mention : itemValue , id : student.id } })}
      >
        <Picker.Item label="Aucune" value="Aucune" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
      </Picker>
    </SafeAreaView>
  );
}

export default AbscenceScreen;