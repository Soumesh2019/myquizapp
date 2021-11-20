/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={{marginLeft: 10}} color="#3a0ca3" size={64} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    top: '50%',
    margin: 10,
    width: '95%',
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    marginLeft: 50,
    fontSize: 25,
    color: 'black',
  },
});
