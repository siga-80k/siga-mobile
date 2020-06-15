import React from 'react';
import {View} from 'react-native';

import Pression from '../../assets/health-icon.svg';
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
          <Pression width={32} height={32} />
        </SVGContainer>
        <HealthTitle>Pressão arterial</HealthTitle>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Value>125/</Value>
          <Value>78</Value>
        </View>

        <Category>Elevada</Category>
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
