import React, {createContext, ReactNode, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AccountContextType = {
  balance: number;
  updateBalance: (debite: number) => void;
};

export const AccountContext = createContext<AccountContextType>({
  balance: 3469.52,
  updateBalance: () => null,
});

export const AccountProvider = ({children}: {children: ReactNode}) => {
  const [balance, setBalance] = useState<number>(3469.52);

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem('balance');
        if (storedBalance) {
          setBalance(parseFloat(storedBalance));
        }
      } catch (error) {
        console.error('Error retrieving balance from AsyncStorage:', error);
      }
    };

    loadBalance();
  }, []);

  const updateBalance = (debite: number) => {
    console.log(balance - debite);
    setBalance(balance - debite);
    AsyncStorage.setItem('balance', (balance - debite).toString());
  };

  return (
    <AccountContext.Provider
      value={{
        balance,
        updateBalance,
      }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
