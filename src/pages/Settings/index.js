import React from 'react';
import {View} from 'react-native';
import {Form} from '@unform/mobile';
// Components
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {Container, AlertTitle, AlertSubTitle} from './styles';

const Settings = ({navigation}) => {
  return (
    <Container>
      <AlertTitle>Insira sua palavra de segurança</AlertTitle>
      <AlertSubTitle>
        A palavra será utilizada por comando de voz em caso de emergência
      </AlertSubTitle>
      <Form>
        <Input
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
          keyboardType="email-address"
          name="user"
          icon="lock"
          placeholder="Palavra-chave"
          returnKeyType="next"
          onSubmitEditing={() => {}}
        />
        <Input
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
          keyboardType="email-address"
          name="user"
          icon="lock"
          placeholder="Confirme sua palavra-chave"
          returnKeyType="next"
          onSubmitEditing={() => {}}
        />
        <SubmitButton
          onPress={() => {
            navigation.navigate('ContactsForm');
          }}>
          Cadastrar
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Settings;
