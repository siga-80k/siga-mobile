import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ButtomBase = styled.TouchableOpacity`
  background: #009bdb;
  justify-content: flex-start;
  height: 70px;
  border-radius: 5px;

  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin: 5px;
  align-items: baseline;
`;

export const RowCard = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-around;
`;

export const ButtomBaseText = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-left: 10px;
`;

export const FieldWrap = styled.View`
  flex: 1;
  justify-content: center;
`;

export const FieldLabel = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

export const SectionSeparator = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #009bdb;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const JobContainer = styled.TouchableOpacity`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;

  padding: 10px 20px;
  margin-bottom: 10px;
`;

export const SimpleRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;

export const Arrow = styled(Ionicons)`
  padding: 0px 10px;
`;

export const ItemSubtitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const JobDate = styled.Text`
  color: #666;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;
