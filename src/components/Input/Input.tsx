import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import Icon from '../Icon/Icon';

interface CustomInputProps {
  placeholder: string;
  label: string;
  onChangeText: (text: string) => void;
  type?: 'text' | 'password';
  capitonPassword?: string;
}

const Container = styled.View`
  position: relative;
`;

const IconStyled = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  width: 20px;
  height: 20px;
  top: 37px;
`;

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

const CaptionPassword = styled(Label)`
  color: #cacaca;
  text-align: right;
  margin-top: 8px;
  font-weight: 500;
  line-height: 16px;
`;

const Input: React.FC<CustomInputProps> = ({
  placeholder,
  label,
  onChangeText,
  type = 'text',
  capitonPassword,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
    onChangeText(text);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleInputChange}
      />
      {type === 'password' && (
        <IconStyled>
          <Icon name="Eyes" width={20} height={20} />
        </IconStyled>
      )}
      <TouchableOpacity>
        <CaptionPassword>{capitonPassword}</CaptionPassword>
      </TouchableOpacity>
    </Container>
  );
};

export default Input;
