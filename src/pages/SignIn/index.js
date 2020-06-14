import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
// Assets
import Logo from '../../assets/logo_siga_letra_escura_fundo_branco.png';
// Components
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
// Utils
import getValidationErrors from '../../utils/getValidationErrors';
// Styles
import {
  Container,
  Title,
  CreateAccountButton,
  CreateAccountButtonText,
  LogoContainer,
  LogoImage,
} from './styles';

const SignIn = () => {
  const formRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <LogoContainer>
              <LogoImage source={Logo} />
            </LogoContainer>

            <View style={{marginTop: -50}}>
              <Title>Faça seu login</Title>
            </View>

            <Form ref={formRef} onSubmit={() => {}}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="user"
                icon="person"
                placeholder="Nome de usuário/E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                name="password"
                icon="lock"
                placeholder="Senha"
                onSubmitEditing={() => navigation.navigate('Saguão')}
                textContentType="newPassword"
              />

              <SubmitButton onPress={() => navigation.navigate('Saguão')}>
                Entrar
              </SubmitButton>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#009bdb" />
        <CreateAccountButtonText>Não tenho cadastro</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
