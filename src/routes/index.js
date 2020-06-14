import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Stack = createStackNavigator();

function Routes() {
  return (
    //dev
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#fefefe'},
        }}>
        <Stack.Screen name="Auth" component={AuthRoutes} />
        <Stack.Screen name="Saguão" component={AppRoutes} />
      </Stack.Navigator>
    </>
  );
}

export default Routes;
