/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import AppStack from './App/Navigation';
import {Colors, LocalStore} from './App/Config';

const App = () => {
  useEffect(() => {
    LocalStore.setValue('appUrl', 'https://api.themoviedb.org/3/movie/popular');
  });

  return (
    <>
      <StatusBar
        backgroundColor={Colors.ButtonPurple}
        barStyle="dark-content"
      />
      <AppStack />
    </>
  );
};

export default App;
