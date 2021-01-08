import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Splash from '../Screens/Splash';
import Movies from '../Screens/Movies';

const MainStack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        {/* <MainStack.Screen name="Splash" component={Splash} /> */}
        <MainStack.Screen name="Movies" component={Movies} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
