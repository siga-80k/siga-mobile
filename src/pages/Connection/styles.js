import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const SafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AlertTitle = styled.Text`
  font-size: 34px;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  margin-bottom: 30px;
`;

export const AlertSubTitle = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  /* margin-top: 30px; */
  margin: 30px 15px 0px 15px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonRadius = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 50px solid #009bdb;
  background-color: #fff;
  padding-top: 10px;
  border-radius: 200px;
`;

export const BGMap = styled.ImageBackground`
  height: 120%;
`;
