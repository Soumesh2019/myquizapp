/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import {decode} from 'html-entities';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../components/Loading';
import Modal from '../components/Modal';

import {
  dataSelector,
  fetchQuestions,
  clearQuestion,
} from '../slices/questionSlice';
import {
  incrementScore,
  skippedScore,
  incorrectScore,
} from '../slices/scoreSlice';

const QuestionScreen = ({navigation, route}) => {
  const [question, setquestion] = useState({});
  const [questionNo, setquestionNo] = useState(0);
  const [modalVisible, setmodalVisible] = useState(false);
  const [isCorrect, setisCorrect] = useState(false);

  const data = useSelector(dataSelector);
  const {number, category, difficultylevel} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (questionNo < data.length || question === 0) {
      setquestion(data[questionNo]);
    }
  }, [data, questionNo]);

  useEffect(() => {
    dispatch(clearQuestion());
    dispatch(fetchQuestions({number, category, difficultylevel}));
  }, []);

  const checkAnswer = (answerStatus = String) => {
    if (answerStatus === 'correct') {
      dispatch(incrementScore());
      setmodalVisible(true);
      setisCorrect(true);
    } else if (answerStatus === 'incorrect') {
      dispatch(incorrectScore());
      setmodalVisible(true);
      setisCorrect(false);
    } else if (answerStatus === 'skipped') {
      dispatch(skippedScore());
    }
    setquestionNo(prev => prev + 1);
  };

  const cleartimeout = setTimeout(() => {
    setmodalVisible(false);

    return () => clearTimeout(cleartimeout);
  }, 1000);

  if (questionNo >= data.length && questionNo !== 0) {
    return (
      <View style={styles.complete}>
        <Text style={{color: '#3a0ca3', ...styles.text}}>
          Thats all for Today
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text style={{color: '#f72585', marginVertical: 20, ...styles.text}}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('result')}>
          <Text style={{color: 'white', ...styles.text}}>Result</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (data.length === 0 || !question || !question.incorrect_answers) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 16}}>
        <Text style={styles.question}>
          <Text style={{color: '#f72585'}}>Q{questionNo + 1}.</Text>
          {decode(question.question, {level: 'html5'})}
        </Text>
      </View>
      <View style={styles.options}>
        {question.incorrect_answers.map((elem, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => checkAnswer('incorrect')}>
              <Text style={styles.option}>
                {decode(elem, {level: 'html5'})}
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity onPress={() => checkAnswer('correct')}>
          <Text style={styles.option}>
            {decode(question.correct_answer, {level: 'html5'})}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => checkAnswer('skipped')}
          style={{...styles.button, backgroundColor: '#f72585'}}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#7209b7',
          }}
          onPress={() => setquestionNo(prev => prev + 1)}>
          <Text style={{...styles.buttonText, color: 'white'}}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#b5179e'}}
          onPress={() => navigation.navigate('result')}>
          <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={modalVisible} isCorrect={isCorrect} />
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    backgroundColor: 'black',
  },

  complete: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  text: {
    fontSize: 40,
    fontStyle: 'italic',
  },
  options: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    flex: 1,
  },

  option: {
    backgroundColor: '#3a0ca3',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    width: 300,
    margin: 5,
    borderRadius: 5,
  },

  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  button: {
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 30,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  question: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
  },
});
