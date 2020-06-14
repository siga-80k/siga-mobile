import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJobs from '../pages/MyJobs';
import Settings from '../pages/Settings';
import Connection from '../pages/Connection';

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
        name="Connection"
        component={Connection}
        options={{
          showIcon: true,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="network-check" size={25} color={color} />
          ),
        }}
      />

      <App.Screen
        name="Jobs"
        component={MyJobs}
        options={{
          showIcon: true,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="work" size={25} color={color} />
          ),
        }}
      />

      <App.Screen
        name="Home"
        component={Home}
        options={{
          showIcon: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="alert-circle"
              size={25}
              color={color}
            />
          ),
        }}
      />

      <App.Screen
        name="Settings"
        component={Settings}
        options={{
          showIcon: true,
          tabBarIcon: ({color}) => (
            <FontAwesome name="gear" size={25} color={color} />
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
