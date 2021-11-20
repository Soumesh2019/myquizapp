/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/Title';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/homeImage.png')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('options')}
        style={{width: '70%'}}>
        <Text style={styles.button}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f72585',
    borderRadius: 5,
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    elevation: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  image: {
    height: 350,
    width: 350,
  },
});
