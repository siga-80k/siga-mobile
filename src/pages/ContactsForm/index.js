import React, {useState} from 'react';
import {View, Platform, ActionSheetIOS} from 'react-native';
import {Form} from '@unform/mobile';
import {Picker} from '@react-native-community/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Components
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  AlertTitle,
  AlertSubTitle,
  PickerContainer,
  PickerText,
} from './styles';

const ContactsForm = ({navigation}) => {
  const [result, setResult] = useState('Selecione a forma de contato');

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Telefone', 'E-mail'],

        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
        } else if (buttonIndex === 1) {
          setResult('Telefone');
        } else if (buttonIndex === 2) {
          setResult('E-mail');
        }
      },
    );

  return (
    <Container>
      <AlertTitle>Insira seu contato de segurança</AlertTitle>
      <AlertSubTitle>
        O sistema irá informar a situação para seu contato em caso de emergência
      </AlertSubTitle>
      {Platform.OS === 'ios' ? (
        <PickerContainer onPress={onPress}>
          <View style={{marginRight: 10}}>
            {result === 'Telefone' ? (
              <MaterialIcons name="contact-phone" size={20} color="#666" />
            ) : (
              <MaterialIcons name="contact-mail" size={20} color="#666" />
            )}
          </View>
          <PickerText>{result}</PickerText>
        </PickerContainer>
      ) : (
        <PickerContainer>
          <Picker
            selectedValue={result}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) => setResult(itemValue)}>
            <Picker.Item label="E-mail" value="E-mail" />
            <Picker.Item label="Telefone" value="Telefone" />
          </Picker>
        </PickerContainer>
      )}

      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="user"
          icon="contacts"
          placeholder={result}
          returnKeyType="next"
          onSubmitEditing={() => {}}
        />

        <SubmitButton
          onPress={() => {
            navigation.navigate('SettingsOverview');
          }}>
          Cadastrar
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default ContactsForm;
