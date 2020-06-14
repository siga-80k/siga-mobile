import styled from 'styled-components/native';

export const ContentContainer = styled.View`
  flex: 1;
  margin: 0px 15px;
  align-self: stretch;
`;

export const CardBase = styled.View`
  background: #009bdb;
  justify-content: center;
  align-items: center;
  height: 145px;
  border-radius: 15px;
  padding: 0px 5px;

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const RowCard = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-around;
`;

export const CircleAccountTxt = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export const CircleAccount = styled.View`
  width: 110px;
  height: 110px;
  background: #e7e7f1;
  border-radius: 100px;
  border: 2px solid #00c2e2;
  align-items: center;
  justify-content: center;
`;

export const ColPlayer = styled.View`
  flex-direction: column;
`;

export const CardBaseName = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #fff;

  font-size: 28px;
`;

export const ButtomBase = styled.View`
  background: #009bdb;
  justify-content: flex-start;
  height: 70px;
  border-radius: 5px;

  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtomBaseText = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-left: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  flex: 1;
  margin: 5px;
  align-items: baseline;
`;

export const InfoContainer = styled.View`
  flex: 1;
  padding: 20px;

  background-color: #fff;

  border: 1px solid #ccc;
  border-radius: 10px;

  margin-bottom: 20px;
`;

export const FieldWrap = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;

export const FieldLabel = styled.Text`
  font-family: 'RobotoSlab-Regular';
`;

export const FieldInfo = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  padding-left: 5px;
`;

export const SectionSeparator = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #009bdb;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Image = styled.Image`
  width: 105px;
  height: 105px;

  border-radius: 55px;
`;

export const BGMap = styled.ImageBackground`
  flex: 1;
`;
