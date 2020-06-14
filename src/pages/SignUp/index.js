import React, {useRef, useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';
// Components
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

// Utils
import getValidationErrors from '../../utils/getValidationErrors';
// Styles
import {Container, Title, BackToSignIn, BackToSignInText} from './styles';

const SignUp = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#41c0ff" />
    </View>
  ) : (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1, paddingTop: 20}}>
          <Container>
            <View>{/* <Logo width={150} height={150} /> */}</View>
            <View style={{marginTop: -50}}>
              <Title>Crie sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={() => {}}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="user"
                icon="person"
                placeholder="Nome de usuário"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current.focus();
                }}
              />
              <Input
                ref={confirmPasswordInputRef}
                secureTextEntry
                name="password2"
                icon="lock"
                placeholder="Confime sua senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <SubmitButton onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </SubmitButton>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#009bdb" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
