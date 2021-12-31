import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthNavigator } from './app/navigation/AuthNavigator';
import { navigationTheme } from './app/navigation/navigationTheme';

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

