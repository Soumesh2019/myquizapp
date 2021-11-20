import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultScreen from './screens/ResultScreen';
import OptionsScreen from './screens/OptionsScreen';
import store from './store/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{headerShown: false, animationTypeForReplace: 'pop'}}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="options" component={OptionsScreen} />
          <Stack.Screen name="question" component={QuestionScreen} />
          <Stack.Screen name="result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
