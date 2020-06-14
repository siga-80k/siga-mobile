import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Form} from '@unform/mobile';
// Assets
import Driver from '../../assets/driver.jpg';
import Map from '../../assets/map.jpg';
// Styles
import {
  ContentContainer,
  CardBase,
  RowCard,
  CircleAccount,
  CircleAccountTxt,
  CardBaseName,
  ColPlayer,
  ButtomBase,
  ButtomBaseText,
  Row,
  InfoContainer,
  FieldWrap,
  FieldLabel,
  FieldInfo,
  SectionSeparator,
  BGMap,
  Image,
} from './styles';

export default function Profile({navigation}) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <BGMap source={Map} imageStyle={{opacity: 0.3}}>
        <ScrollView style={{flex: 1}}>
          <ContentContainer>
            <CardBase>
              <RowCard>
                <CircleAccount>
                  <Image source={Driver} />
                </CircleAccount>
                <ColPlayer>
                  <CardBaseName>Silvio Santos</CardBaseName>
                </ColPlayer>
              </RowCard>
            </CardBase>
            <InfoContainer>
              <FieldWrap>
                <Row>
                  <FieldLabel>Placa do veículo</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>AAA-9999</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>CPF</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>123.456.789-00</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>Modelo do veículo</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>Scania S500</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>Contato emergencial</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>(99) 99999-9999</FieldInfo>
              </FieldWrap>
            </InfoContainer>
            <ButtomBase>
              <RowCard>
                <Row justify="flex-start">
                  <FontAwesome5 name="edit" size={24} color="#fff" />
                  <ButtomBaseText onPress={() => {}}>
                    Editar perfil
                  </ButtomBaseText>
                </Row>
              </RowCard>
            </ButtomBase>
            <ButtomBase>
              <RowCard>
                <Row justify="flex-start">
                  <FontAwesome5 name="door-open" size={24} color="#fff" />
                  <ButtomBaseText onPress={() => {}}>Sair </ButtomBaseText>
                </Row>
              </RowCard>
            </ButtomBase>
          </ContentContainer>
        </ScrollView>
      </BGMap>
    </>
  );
}
