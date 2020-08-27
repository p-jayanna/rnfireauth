import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInContainer from './SignInContainer';
import HomeContainer from './HomeContainer';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="auth"
        component={SignInContainer}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="home"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
