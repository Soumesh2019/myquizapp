/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {correctSelector} from '../slices/scoreSlice';
import {dataSelector} from '../slices/questionSlice';

import {useSelector} from 'react-redux';

const Modal = ({isVisible, isCorrect}) => {
  const score = useSelector(correctSelector);
  const data = useSelector(dataSelector);

  return (
    <View style={{display: isVisible ? 'flex' : 'none', ...styles.container}}>
      <Text style={styles.title}>
        {isCorrect ? 'This is Correct Answer' : 'Sorry... Its Wrong Answer'}
      </Text>
      <Image
        style={styles.image}
        source={
          isCorrect
            ? require('../assets/correct.jpg')
            : require('../assets/incorrect.jpg')
        }
      />
      <Text style={styles.score}>
        Score: {score}/{data.length}
      </Text>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '95%',
    height: '95%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#f72585',
  },
  score: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 30,
  },
});
