import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Pressable } from 'react-native';

const App = () => {

  const [sentence, setSentence] = useState(null);

  const calcul = sentence => sentence.split(' ').map(w => w && w.length).filter(w => w != "").join(' ');

  const onPressReverse = () => {
    if(sentence){
      setSentence( sentence.split(' ').map( word => word.split('').reverse().join('') ).join(' ') )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.blue}>
        <TextInput
          onChangeText={sentence => setSentence(sentence)}
          defaultValue={sentence}
        />
      </View>
      {sentence != null ?
        <View style={styles.sky}>
          <Text> {calcul(sentence)} </Text>
        </View> : null
      }
      <View style={{marginTop: 10}}>
        <Button
          onPress={onPressReverse}
          title="Reverse sentence"
          color="#841584"
        />
        <Text>{sentence}</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  blue: {
    height: 50,
    backgroundColor: 'powderblue'
  },
  sky: {
    height: 50,
    backgroundColor: 'skyblue',
    padding: 10, fontSize: 42
  }
});