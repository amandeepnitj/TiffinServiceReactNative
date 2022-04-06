import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './src/components/SignUp';
import LoginPage from './src/components/LoginPage';
import Forgotpassword from './src/components/Forgotpassword';
import WelcomePage from './src/components/WelcomePage';
import UserProfile from './src/components/UserProfile';
import HomePage from './src/HomePage';
import React, { useEffect, useState } from 'react';
export default function App() {

  
          return (
    <NavigationContainer>
    {/* <WelcomePage></WelcomePage> */}
    <LoginPage/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#000000',
    
  },
  Header:{
    flex:1
  },
  WelcomePage:
  {
    flex:2
  },
});
