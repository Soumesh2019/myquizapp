/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Wiz Quiz</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
