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

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaWrapper>
      <BGMap source={Map} imageStyle={{opacity: 0.3}}>
        <Container>
          <AlertTitle>Pressione em caso de emergência</AlertTitle>
          <ButtonContainer
            onPress={() => {
              Alert.alert('Enviado!', 'A ajuda foi acionada');
            }}>
            <ButtonRadius>
              <View style={{margin: 10, marginBottom: 5}}>
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={180}
                  color="#F65C5B"
                />
              </View>
            </ButtonRadius>
          </ButtonContainer>
          <AlertSubTitle>
            Suas informações serão enviadas para as autoridades
          </AlertSubTitle>
        </Container>
      </BGMap>
    </SafeAreaWrapper>
  );
}
