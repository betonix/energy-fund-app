import React, {useContext, useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import SelectBox from '../../components/select-list/select-list';
import styled from 'styled-components/native';
import {
  ButtonContainer,
  CaptionBalance,
  Card,
  CardPayee,
  CircleAdd,
  Container,
  ContentList,
  FlatListWrapper,
  Label,
  OptionsPayeeText,
  OptionsPayeeWrapper,
  SavePayeText,
  TextCard,
  TextPayee,
  TransactionWrapper,
  WrapperSelect,
} from './transfer.styles';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import Button from '../../components/button/button';
import {KeyboardView} from '../auth/auth.styles';
import Checkbox from '../../components/checkbox/checkbox';
import {AccountContext} from '../../context/account/account-provider';
import {useNavigation} from '@react-navigation/native';

const accountData = [
  {key: '1', value: 'VISA **** **** **** 1234'},
  {key: '2', value: 'VISA **** **** **** 5544'},
  {key: '3', value: 'VISA **** **** **** 7778'},
  {key: '4', value: 'VISA **** **** **** 5555'},
];

const bankList = [{key: '1', value: 'Citibank'}];

const branchList = [{key: '1', value: 'New York'}];

const data = [
  {key: '1', text: 'Transfer via card number', icon: 'Credit'},
  {key: '2', text: 'Transfer to the same bank', icon: 'Person'},
  {key: '3', text: 'Transfer to another bank', icon: 'Bank'},
];

const dataPayee = [
  {
    key: '1',
    name: 'emma',
    image: require('../../assets/images/emma.png'),
  },
  {
    key: '2',
    name: 'Justin',
    image: require('../../assets/images/justin.png'),
  },
  {
    key: '3',
    name: 'Amanda',
    image: require('../../assets/images/emma.png'),
  },
];

const Transfer: React.FC = () => {
  const navigation = useNavigation<any>();

  const {balance, updateBalance} = useContext(AccountContext);

  const [selected, setSelected] = useState('');

  const [paySelected, setPaySelected] = useState('');

  const [savePayee, setSavePayee] = useState(false);

  const [accountTransfer, setAccountTransfer] = useState({});

  const renderTransactions = ({item}) => (
    <Card
      isSelected={item.key === selected}
      onPress={() => setSelected(item.key)}>
      <Icon name={item.icon} width={28} height={23} />
      <TextCard>{item.text}</TextCard>
    </Card>
  );

  const renderPayee = ({item, index}) => {
    return (
      <>
        {index == 0 && (
          <CardPayee>
            <CircleAdd>
              <Icon name="Add" width={24} height={24}></Icon>
            </CircleAdd>
          </CardPayee>
        )}

        <CardPayee
          isSelected={item.key === paySelected}
          onPress={() => {
            setPaySelected(item.key);
            setAccountTransfer({...accountTransfer, name: item.name});
          }}>
          <Image source={item.image} width={28} height={23} />
          <TextPayee isSelected={item.key === paySelected}>
            {item.name}
          </TextPayee>
        </CardPayee>
      </>
    );
  };

  return (
    <KeyboardView behavior="padding" keyboardVerticalOffset={120}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Container>
            <SelectBox data={accountData} label="Choose account/ card" />
            <CaptionBalance>Available balance : ${balance}</CaptionBalance>
            <Label>Choose transaction</Label>
          </Container>
          <TransactionWrapper>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderTransactions}
              keyExtractor={item => item.key}
            />
          </TransactionWrapper>

          <Container>
            <OptionsPayeeWrapper>
              <OptionsPayeeText color="#989898">Choose payee</OptionsPayeeText>
              <OptionsPayeeText color="#3629B7">Search payee</OptionsPayeeText>
            </OptionsPayeeWrapper>
          </Container>
          <FlatListWrapper>
            <FlatList
              data={dataPayee}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderPayee}
              keyExtractor={item => item.key}
            />
          </FlatListWrapper>
          <Container>
            <ContentList>
              <WrapperSelect>
                <SelectBox
                  rightArrow={true}
                  data={bankList}
                  label="Choose bank"
                />
              </WrapperSelect>
              <WrapperSelect>
                <SelectBox
                  rightArrow={true}
                  data={branchList}
                  label="Choose branch"
                />
              </WrapperSelect>

              <Input
                label={'Payee name'}
                value={accountTransfer.name}
                onChangeText={text =>
                  setAccountTransfer({...accountTransfer, name: text})
                }
                placeholder={'Payee name'}
              />
              <Input
                label={'Card number'}
                type="numeric"
                onChangeText={text =>
                  setAccountTransfer({...accountTransfer, card: text})
                }
                placeholder={'Card number'}
              />
              <Input
                label={'Amount'}
                type="numeric"
                onChangeText={text =>
                  setAccountTransfer({...accountTransfer, amount: text})
                }
                placeholder={'Amount'}
              />
              <Input
                label={'Reference'}
                onChangeText={text =>
                  setAccountTransfer({...accountTransfer, reference: text})
                }
                placeholder={'Reference'}
              />

              <Checkbox
                isSelected={savePayee}
                onPress={() => setSavePayee(prev => !prev)}
                text={<SavePayeText>Save Payee details </SavePayeText>}
              />
              <ButtonContainer>
                <Button
                  title="Confirm"
                  disabled={
                    !selected ||
                    !accountTransfer.name ||
                    !accountTransfer.amount ||
                    !accountTransfer.card ||
                    !(parseFloat(accountTransfer.amount) < balance)
                  }
                  onPress={() => {
                    updateBalance(parseFloat(accountTransfer.amount));
                    setTimeout(() => {
                      alert('transfer completed successfully');
                      navigation.goBack();
                    }, 1000);
                  }}
                />
              </ButtonContainer>
            </ContentList>
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardView>
  );
};

export default Transfer;
