import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px 20px;
  justify-content: center;
`;

export const SVGContainer = styled.View`
  width: 64px;
  height: 64px;
  margin-left: 20px;
  margin-top: -32px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const HealthBox = styled.View`
  border: 2px solid ${(props) => props.category};
  border-radius: 10px;
  background-color: ${(props) => props.category};

  margin-bottom: 40px;
`;

export const HealthTitle = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  padding: 10px 20px;
`;

export const Category = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  padding: 10px 20px;
`;

export const Value = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  font-size: 50px;
  text-align: center;
`;
