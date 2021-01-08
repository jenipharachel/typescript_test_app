import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Splash from '../Screens/Splash';
import MovieList from '../Screens/Movies/MovieList';
import MovieDetails from '../Screens/Movies/MovieDetails';

const MovieStack = createStackNavigator();

function MovieStackScreen() {
  return (
    <MovieStack.Navigator headerMode="none">
      <MovieStack.Screen name="MovieList" component={MovieList} />
      <MovieStack.Screen name="MovieDetails" component={MovieDetails} />
    </MovieStack.Navigator>
  );
}

const MainStack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        {/* <MainStack.Screen name="Splash" component={Splash} /> */}
        <MainStack.Screen name="Movies" component={MovieStackScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
