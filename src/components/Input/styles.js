import styled, {css} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
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

export const TextInput = styled.TextInput`
  flex: 1;
  color: #1e252d;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 10px;
`;
