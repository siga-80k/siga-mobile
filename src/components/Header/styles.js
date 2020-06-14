import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

export const Textheader = styled.Text`
  margin: 0;
  color: #fff;
  font-size: 15px;
`;
export const Li = styled.View`
  flex-direction: row;
`;

export const ItemWrapper = styled.View`
  flex-direction: row;
  border: 1px solid #00c2e2;
  border-radius: 15px;

  padding: 5px 10px;
  margin-right: 10px;
`;

export const ItemText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';

  margin-left: 5px;
`;

export const CircleAccountTxt = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export const CircleAccount = styled.View`
  width: 50px;
  height: 50px;
  background: #e7e7f1;
  border-radius: 100px;
  border: 2px solid #00c2e2;
  align-items: center;
  justify-content: center;
  right: 20px;
`;
