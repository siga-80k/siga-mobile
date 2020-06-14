import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const App = createBottomTabNavigator();

function AppRoutes() {
  return (
    <App.Navigator
      tabBarOptions={{
        style: {backgroundColor: '#fefefe'},
        inactiveTintColor: '#666',
        activeTintColor: '#00C2E2',
        showLabel: false,
      }}>
      <App.Screen
        name="Home"
        component={Home}
        options={{
          showIcon: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={25} color={color} />
          ),
        }}
      />

      <App.Screen
        name="Perfil"
        component={Profile}
        options={{
          showIcon: true,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={25} color={color} />
          ),
        }}
      />
    </App.Navigator>
  );
}

export default AppRoutes;
