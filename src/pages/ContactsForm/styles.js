import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0px 20px;
`;

export const AlertTitle = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  margin-bottom: 10px;
`;

export const AlertSubTitle = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  /* margin-top: 30px; */
  margin: 0px 15px 20px 15px;
`;

export const PickerContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;

  border: 1px solid;

  border-color: #ccc;

  flex-direction: row;
  align-items: center;
`;
export const PickerText = styled.Text`
  flex: 1;
  color: #1e252d;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
