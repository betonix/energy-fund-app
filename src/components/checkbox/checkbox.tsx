import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const CheckboxContainer = styled.TouchableOpacity`
  align-items: center;
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${({theme}) => theme.color.primary};
  gap: 4px;
  margin-top: 4px;
`;

export const ItemText = styled.View`
  flex: 1;
  margin-left: 10px;
  align-items: flex-start;
`;

export const CheckText = styled.Text`
  font-weight: 800;
  color: ${({theme}) => theme.color.primary};
  margin-top: 1px;
`;

interface Props {
  text: React.ReactElement;
  isSelected: boolean;
  onPress: () => void;
}

const Checkbox = ({text, isSelected, onPress}: Props) => {
  return (
    <Container>
      <CheckboxContainer onPress={onPress}>
        {isSelected ? <CheckText>✓</CheckText> : null}
      </CheckboxContainer>
      <ItemText>{text}</ItemText>
    </Container>
  );
};

export default Checkbox;
