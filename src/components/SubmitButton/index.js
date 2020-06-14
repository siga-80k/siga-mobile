import React from 'react';
// import {RectButtonProperties} from 'react-native-gesture-handler';
// Styles
import {Container, ButtonText} from './styles';

const SubmitButton = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default SubmitButton;
