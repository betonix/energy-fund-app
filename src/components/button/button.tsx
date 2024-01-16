import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const ButtonComponent = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-family: ${({theme}) => theme.font.poppins};
  width: 100%;
  height: 44px;
  background: ${({theme, disabled}) =>
    disabled ? theme.color.secondary : theme.color.primary};
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.color.white};
  text-align: center;
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Button: React.FC<ButtonProps> = ({title, onPress, disabled = false}) => {
  return (
    <ButtonComponent onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonComponent>
  );
};

export default Button;
