import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

interface CustomInputProps {
  placeholder: string;
  label: string;
  onChangeText: (text: string) => void;
}

const StyledInput = styled.TextInput`
  border-radius: 15px;
  border: 1px solid #cbcbcb;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 44px;
  padding: 12px;
  color: #343434;
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const Label = styled.Text`
  color: #979797;
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 8px;
`;

const Input: React.FC<CustomInputProps> = ({
  placeholder,
  label,
  onChangeText,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
    onChangeText(text);
  };

  return (
    <View>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default Input;
