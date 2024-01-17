import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-items: center;
`;

export const CheckboxContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${({theme}) => theme.color.primary};
`;

export const ItemText = styled.View`
  flex: 1;
  margin-left: 10px;
  align-items: flex-start;
`;

export const CheckText = styled.Text`
  font-weight: 800;
  color: ${({theme}) => theme.color.primary};
  font-size: 18px;
  top: -2px;
`;

interface Props {
  text: React.ReactElement;
  isSelected: boolean;
  onPress: () => void;
}

const Checkbox = ({text, isSelected, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <CheckboxContainer>
        {isSelected ? <CheckText>✓</CheckText> : null}
      </CheckboxContainer>
      <ItemText>{text}</ItemText>
    </Container>
  );
};

export default Checkbox;
