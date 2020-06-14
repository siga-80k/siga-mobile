import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Styles
import {
  Container,
  ItemWrapper,
  ItemText,
  CircleAccount,
  CircleAccountTxt,
  Li,
} from './styles';

const Header = () => {
  return (
    <Container>
      <Li>
        <ItemWrapper>
          <FontAwesome name="diamond" size={15} color="#00c2e2" />
          <ItemText>450</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <FontAwesome5 name="coins" size={15} color="#ffd700" />
          <ItemText>450</ItemText>
        </ItemWrapper>
      </Li>
      <CircleAccount>
        <CircleAccountTxt>SS</CircleAccountTxt>
      </CircleAccount>
    </Container>
  );
};

export default Header;
