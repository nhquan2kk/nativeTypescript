import React from 'react';
import HomeScreen from './../native0/src/HomeScreen'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginScreen from './src/LoginScreen';

const App = () => {
  return (
    <LoginScreen />
  )
}

export default App;