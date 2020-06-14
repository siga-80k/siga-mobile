import React from 'react';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Components
import SubmitButton from '../../components/SubmitButton';
import {
  AlertTitle,
  AlertSubTitle,
  Container,
  ButtomBase,
  ButtomBaseText,
} from './styles';

const SettingsOverview = () => {
  return (
    <Container>
      <AlertTitle>
        Seu contato e palavra-chave estão definidos com sucesso
      </AlertTitle>
      <AlertSubTitle>
        Clique no botão abaixo caso deseje alterar as informações
      </AlertSubTitle>

      <SubmitButton onPress={() => {}}>Editar</SubmitButton>
    </Container>
  );
};

export default SettingsOverview;
