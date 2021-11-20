/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';

import {categories, difficulty} from '../data';

const OptionsScreen = ({navigation}) => {
  const [number, setnumber] = useState(10);
  const [category, setcategory] = useState('');
  const [difficultylevel, setdifficultylevel] = useState('');

  const handleSubmit = () => {
    navigation.navigate('question', {number, category, difficultylevel});
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Set Your Questionnaire</Text>
      <Text style={styles.helperText}>Select Total Number of Questions</Text>
      <TextInput
        placeholder="Number of questions"
        onChangeText={e => setnumber(e)}
        keyboardType="number-pad"
        style={styles.input}
      />
      <Text style={styles.helperText}>Select Your Category</Text>
      <SelectDropdown
        data={categories}
        onSelect={(select, index) => {
          setcategory(select[1]);
        }}
        defaultButtonText="Select An Item..."
        buttonTextAfterSelection={(select, index) => {
          return select[0];
        }}
        rowTextForSelection={(select, index) => {
          return select[0];
        }}
        buttonStyle={styles.input}
        rowStyle={{width: '100%'}}
      />

      <Text style={styles.helperText}>Select Your Difficulty</Text>
      <SelectDropdown
        data={difficulty}
        onSelect={(select, index) => {
          setdifficultylevel(select[0]);
        }}
        defaultButtonText="Select An Item..."
        buttonTextAfterSelection={(select, index) => {
          return select[1];
        }}
        rowTextForSelection={(select, index) => {
          return select[1];
        }}
        buttonStyle={styles.input}
        rowStyle={{width: '100%'}}
      />
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3f37c9',
    width: '100%',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  input: {
    color: 'white',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#3f37c9',
    paddingLeft: 20,
    borderRadius: 5,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: '#4cc9f0',
    fontStyle: 'italic',
    marginVertical: 20,
  },

  helperText: {
    fontSize: 20,
    marginVertical: 10,
  },
});
