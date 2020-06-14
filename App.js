import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import './src/config/ReactotronConfig';

import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fefefe" />

      <SafeAreaView style={{flex: 1, backgroundColor: '#fefefe'}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
