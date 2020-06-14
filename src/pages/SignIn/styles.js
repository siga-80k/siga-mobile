import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  background: #fefefe;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 30px ${16 + getBottomSpace()}px;

  flex-direction: row;

  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: #000;
  font-size: 18px;

  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 300;
  height: 200;
`;
