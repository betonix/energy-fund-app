import {useRef, useState} from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Label = styled.Text`
  color: ${({theme, selected}) => (selected ? theme.color.primary : '#CACACA')};
  text-align: center;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const LineChartGraph = ({onChange = () => {}}) => {
  const [currentValue, setCurrentValue] = useState();

  const lcomp = (label: string, index: number) => {
    return <Label selected={currentValue === index}>{label}</Label>;
  };
  const data = [
    {
      value: 44,
      labelComponent: () => lcomp('1 Jan', 1),
      index: 1,
    },
    {
      value: 70,
      labelComponent: () => lcomp('10 Jan', 2),
      index: 2,
    },
    {
      value: 200,
      labelComponent: () => lcomp('15 Jan', 3),
      index: 3,
    },
    {
      value: 150,
      labelComponent: () => lcomp('20 Jan', 4),
      index: 4,
    },
    {
      value: 90,
      labelComponent: () => lcomp('25 Jan', 5),
      index: 5,
    },
  ];
  return (
    <View style={{marginLeft: -30}}>
      <LineChart
        data={data}
        onPress={() => console.log('item onPress: ')}
        height={200}
        rulesColor="#EBECF1"
        rulesType="dash"
        noOfSections={4}
        adjustToWidth
        spacing={70}
        curved
        thickness={3}
        hideDataPoints
        focusEnabled
        onFocus={item => {
          setCurrentValue(item.index);
          onChange(item.value);
        }}
        showStripOnFocus
        color="#1573FF"
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisTextStyle={{color: 'transparent'}}
        xAxisLabelTextStyle={{color: 'black'}}
        pointerConfig={{
          pointerStripColor: '#3629B7',
          pointerStripWidth: 1,
          pointerStripUptoDataPoint: true,
          activatePointersOnLongPress: true,
          pointerEvents: 'auto',
          pointerLabelComponent: (item: any) => {
            setCurrentValue(item[0].index);
            onChange(item[0].value);
          },
          pointerComponent: (item: any) => (
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: '#1573FF',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -4,
              }}>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: 'white',
                }}
              />
            </View>
          ),
        }}
      />
    </View>
  );
};

export default LineChartGraph;
