import React from 'react';
import {View, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from '../../assets/map.jpg';

import {
  SafeAreaWrapper,
  Container,
  AlertTitle,
  ButtonRadius,
  ButtonContainer,
  BGMap,
  AlertSubTitle,
} from './styles';

export default function Connection({navigation}) {
  return (
    <SafeAreaWrapper>
      <BGMap source={Map} imageStyle={{opacity: 0.3}}>
        <Container>
          <AlertTitle>Pressione para estabelecer conexão</AlertTitle>
          <ButtonContainer
            onPress={() => {
              Alert.alert('Conectado!', 'O módulo está pronto para ser usado');
            }}>
            <ButtonRadius>
              <View style={{margin: 10, marginBottom: 0}}>
                <MaterialCommunityIcons
                  name="bluetooth-connect"
                  size={180}
                  color="#009bdb"
                />
              </View>
            </ButtonRadius>
          </ButtonContainer>
          <AlertSubTitle>
            A conexão será estabelecida automaticamente
          </AlertSubTitle>
        </Container>
      </BGMap>
    </SafeAreaWrapper>
  );
}
