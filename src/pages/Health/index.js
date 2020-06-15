import React from 'react';
import {View} from 'react-native';

import Sleep from '../../assets/sleep.svg';
import Stethoscope from '../../assets/stethoscope';

import {
  Container,
  HealthBox,
  HealthTitle,
  SVGContainer,
  Category,
  Value,
} from './styles';

const Health = () => {
  return (
    <Container>
      <HealthBox category={'#FFB55C'}>
        <SVGContainer>
          <Sleep width={40} height={40} />
        </SVGContainer>
        <HealthTitle>Qualidade do sono</HealthTitle>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Value>5h/</Value>
          <Value>dia</Value>
        </View>

        <Category>Turbulento</Category>
      </HealthBox>

      <HealthBox category={'#58A397'}>
        <SVGContainer>
          <Stethoscope width={32} height={32} />
        </SVGContainer>
        <HealthTitle>Batimentos cardíacos</HealthTitle>
        <Value>80 BPM</Value>
        <Category>Normal</Category>
      </HealthBox>
    </Container>
  );
};

export default Health;
