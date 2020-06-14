import React from 'react';
import {ScrollView, Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  ButtomBase,
  RowCard,
  Row,
  ButtomBaseText,
  FieldWrap,
  FieldLabel,
  SectionSeparator,
  JobContainer,
  SimpleRow,
  ItemTitle,
  Arrow,
  JobDate,
  ItemSubtitle,
} from './styles';

const MyJobs = () => {
  return (
    <Container>
      <ButtomBase>
        <RowCard>
          <Row justify="flex-start">
            <FontAwesome5 name="plus-circle" size={24} color="#fff" />
            <ButtomBaseText onPress={() => {}}>
              Adicionar novo trabalho
            </ButtomBaseText>
          </Row>
        </RowCard>
      </ButtomBase>

      {/* TRABALHOS ATUAIS */}

      <FieldWrap>
        <Row>
          <FieldLabel>Trabalho atual</FieldLabel>
          <SectionSeparator />
        </Row>
        <JobContainer>
          <SimpleRow>
            <ItemTitle>São Paulo</ItemTitle>

            <Arrow name={'ios-arrow-round-forward'} size={35} />

            <ItemTitle>Rio de Janeiro</ItemTitle>
          </SimpleRow>
          <ItemSubtitle>Generic Enterprise LTDA.</ItemSubtitle>
          <ItemSubtitle>Carga frigorífica</ItemSubtitle>
          <JobDate>Iniciou em 14/06/2020</JobDate>
        </JobContainer>
      </FieldWrap>

      {/* TRABALHO ANTERIORES */}

      <FieldWrap>
        <Row>
          <FieldLabel>Trabalhos anteriores</FieldLabel>
          <SectionSeparator />
        </Row>
        <ScrollView>
          <JobContainer>
            <SimpleRow>
              <ItemTitle>Rio de Janeiro</ItemTitle>

              <Arrow name={'ios-arrow-round-forward'} size={35} />

              <ItemTitle>São Paulo</ItemTitle>
            </SimpleRow>
            <ItemSubtitle>Generic Enterprise LTDA.</ItemSubtitle>
            <ItemSubtitle>Carga a granel</ItemSubtitle>
            <JobDate>Terminou em 14/06/2020</JobDate>
          </JobContainer>

          <JobContainer>
            <SimpleRow>
              <ItemTitle>Volta Redonda</ItemTitle>

              <Arrow name={'ios-arrow-round-forward'} size={35} />

              <ItemTitle>Rio de Janeiro</ItemTitle>
            </SimpleRow>
            <ItemSubtitle>Generic Enterprise LTDA.</ItemSubtitle>
            <ItemSubtitle>Carga frigorífica</ItemSubtitle>
            <JobDate>Terminou em 14/06/2020</JobDate>
          </JobContainer>

          <JobContainer>
            <SimpleRow>
              <ItemTitle>Uberlândia</ItemTitle>

              <Arrow name={'ios-arrow-round-forward'} size={35} />

              <ItemTitle>Volta Redonda</ItemTitle>
            </SimpleRow>
            <ItemSubtitle>Generic Enterprise LTDA.</ItemSubtitle>
            <ItemSubtitle>Carga viva</ItemSubtitle>
            <JobDate>Terminou em 14/06/2020</JobDate>
          </JobContainer>

          <JobContainer>
            <SimpleRow>
              <ItemTitle>Belo Horizonte</ItemTitle>

              <Arrow name={'ios-arrow-round-forward'} size={35} />

              <ItemTitle>Uberlândia</ItemTitle>
            </SimpleRow>
            <ItemSubtitle>Generic Enterprise LTDA.</ItemSubtitle>
            <ItemSubtitle>Carga seca</ItemSubtitle>
            <JobDate>Terminou em 14/06/2020</JobDate>
          </JobContainer>
        </ScrollView>
      </FieldWrap>
    </Container>
  );
};

export default MyJobs;
