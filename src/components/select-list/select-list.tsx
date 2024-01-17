import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import styled from 'styled-components/native';
import Icon from '../Icon/Icon';

interface SelectBoxProps {
  data: {key: string; value: string}[];
  label: string;
  rightArrow?: boolean;
}

const StyledSelectList = styled(SelectList)`
  width: 100%;
  height: 44px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-top: 16px;
`;

const Label = styled.Text`
  color: #979797;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 8px;
`;

const SelectBox: React.FC<SelectBoxProps> = ({data, label, rightArrow}) => {
  const [selected, setSelected] = React.useState(data[0].value);

  return (
    <>
      <Label>{label}</Label>
      <StyledSelectList
        fontFamily="poppins"
        setSelected={val => setSelected(val)}
        boxStyles={{borderRadius: 15, borderColor: '#CBCBCB'}}
        inputStyles={{
          fontSize: 14,
          fontStyle: 'normal',
          color: '#343434',
        }}
        searchPlaceholder={''}
        searchicon={<></>}
        arrowicon={
          rightArrow ? (
            <Icon name="ArrowRight" width={20} height={20} />
          ) : (
            <Icon name="ArrowDown" width={20} height={20} />
          )
        }
        data={data}
        save="value"
        defaultOption={data[0]}
      />
    </>
  );
};

export default SelectBox;
