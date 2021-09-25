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


export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permissions to access the library')
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled)
        setImageUri(result.uri)
    } catch (error) {
      console.log("Error picking up an image", error)
    }

  }

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
      {/* <ListingEditScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <AccountScreen /> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <MessagesScreen /> */}
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
