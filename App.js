import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import ImageInput from './app/components/ImageInput';


export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permissions to access the library')
  }

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <Screen>
      <ImageInput />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
