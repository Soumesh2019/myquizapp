/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  correctSelector,
  incorrectSelector,
  skippedSelector,
} from '../slices/scoreSlice';
import {dataSelector} from '../slices/questionSlice';

import {useDispatch} from 'react-redux';
import {clearScoreBoard} from '../slices/scoreSlice';

import {useSelector} from 'react-redux';

const ResultScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const clearScore = () => {
    dispatch(clearScoreBoard());
    navigation.navigate('home');
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', clearScore);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', clearScore);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Correct Answers: {useSelector(correctSelector)}{' '}
      </Text>
      <Text style={styles.text}>
        Incorrect Answers: {useSelector(incorrectSelector)}{' '}
      </Text>
      <Text style={styles.text}>
        Skipped Questions: {useSelector(skippedSelector)}
      </Text>
      <Text style={styles.text}>
        Total Questions: {useSelector(dataSelector).length}
      </Text>
      <Text style={styles.text}>
        Score: {useSelector(correctSelector)}/{useSelector(dataSelector).length}
      </Text>
      <TouchableOpacity onPress={() => clearScore()}>
        <Text style={styles.button}>Back To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#f72585',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    width: 300,
    marginTop: 20,
    margin: 5,
    color: 'black',
    alignSelf: 'center',
    borderRadius: 5,
  },

  image: {
    height: 350,
    width: 350,
  },
  text: {
    marginLeft: 10,
    fontSize: 30,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
});
