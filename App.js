import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';


const App = () => {
  const [selectedOption1, setSelectedOption1] = useState('option1');
  const [selectedOption2, setSelectedOption2] = useState('option1');

  const handleOption1Change = (value) => {
    setSelectedOption1(value);
    console.log("Selected option 1: ", value);
  };

  const handleOption2Change = (value) => {
    setSelectedOption2(value);
    console.log("Selected option 2: ", value);
  };

  let paragraph = '';
  if (selectedOption1 === 'option1' && selectedOption2 === 'option1') {
    paragraph = 'You have selected the UK twice.';
  } else if (selectedOption1 === 'option2' && selectedOption2 === 'option2') {
    paragraph = 'You have selected France twice.';
  } else if (selectedOption1 === 'option3' && selectedOption2 === 'option3') {
    paragraph = 'You have selected Germany twice.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option2') {
    paragraph = 'You have selected the UK and France.';
  } else if (selectedOption1 === 'option1' && selectedOption2 === 'option3') {
    paragraph = 'You have selected the UK and Germany.';
  } else if (selectedOption1 === 'option2' && selectedOption2 === 'option1') {
    paragraph = 'You have selected France and the UK.';
  } else if (selectedOption1 === 'option2' && selectedOption2 === 'option3') {
    paragraph = 'You have selected France and Germany.';
  } else if (selectedOption1 === 'option3' && selectedOption2 === 'option1') {
    paragraph = 'You have selected Germany and the UK.';
  } else if (selectedOption1 === 'option3' && selectedOption2 === 'option2') {
    paragraph = 'You have selected Germany and France.';
  }

  return (

    <View style={styles.container}>
      <View style={styles.dropdown}>
      <Text style={styles.label}>Country you live in:</Text>
      <Picker
        selectedValue={selectedOption1}
        onValueChange={handleOption1Change}
      >
        <Picker.Item label="UK" value="option1" />
        <Picker.Item label="France" value="option2" />
        <Picker.Item label="Germany" value="option3" />
      </Picker>
    </View>

    <View style={styles.dropdown}>
      <Text style={styles.label}>Country you want to live in:</Text>
      <Picker
        selectedValue={selectedOption2}
        onValueChange={handleOption2Change}
      >
        <Picker.Item label="UK" value="option1" />
        <Picker.Item label="France" value="option2" />
        <Picker.Item label="Germany" value="option3" />
      </Picker>
    </View>

      <Text style={styles.paragraph}>{paragraph}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal:20,
  },
  dropdown: {
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    marginTop: 20,
    fontSize: 16,
    marginHorizontal:10,
  },
});

export default App;
