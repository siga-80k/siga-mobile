import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
            <ButtomBase>
              <RowCard>
                <Row justify="flex-start">
                  <FontAwesome name="gear" size={24} color="#fff" />
                  <ButtomBaseText
                    onPress={() => {
                      navigation.navigate('Keyword');
                    }}>
                    Configurações de emergência
                  </ButtomBaseText>
                </Row>
              </RowCard>
            </ButtomBase>

            <InfoContainer>
              <FieldInfo>Dados Pessoais</FieldInfo>
              <FieldWrap>
                <Row>
                  <FieldLabel>Nome completo</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>Silvio Santos Silva</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>CPF</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>668.194.478-67</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>Data de nascimento</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>01/01/1951</FieldInfo>
              </FieldWrap>
            </InfoContainer>

            <InfoContainer>
              <FieldInfo>CNH</FieldInfo>
              <FieldWrap>
                <Row>
                  <FieldLabel>Número</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>66819447867</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>Tipo</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>E</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>Data de emissão</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>01/01/2018</FieldInfo>
              </FieldWrap>
            </InfoContainer>

            <InfoContainer>
              <FieldInfo>Dados do veículo</FieldInfo>
              <FieldWrap>
                <Row>
                  <FieldLabel>Placa</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>MAO-3333</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>Modelo</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>Scania S500</FieldInfo>
              </FieldWrap>
              <FieldWrap>
                <Row>
                  <FieldLabel>RENAVAM</FieldLabel>
                  <SectionSeparator />
                </Row>
                <FieldInfo>0081944786-7</FieldInfo>
              </FieldWrap>
            </InfoContainer>

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
