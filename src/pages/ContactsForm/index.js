import React from 'react';
import {View} from 'react-native';
import {Form} from '@unform/mobile';
// Components
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {Container, AlertTitle, AlertSubTitle} from './styles';

const ContactsForm = () => {
  return (
    <Container>
      <AlertTitle>Insira seu contato de segurança</AlertTitle>
      <AlertSubTitle>
        O sistema irá informar a situação para seu contato em caso de emergência
      </AlertSubTitle>
      <Form>
        <Input
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
          keyboardType="email-address"
          name="user"
          icon="contacts"
          placeholder="Telefone ou e-mail"
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
        <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
      </Form>
    </Container>
  );
};

export default ContactsForm;
