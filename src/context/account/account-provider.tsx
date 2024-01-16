import React, {createContext, ReactNode, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AccountContextType = {
  balance: number;
  updateBalance: (newBalance: number) => void;
};

export const AccountContext = createContext<AccountContextType>({
  balance: 0,
  updateBalance: () => null,
});

export const AccountProvider = ({children}: {children: ReactNode}) => {
  const [balance, setBalance] = useState<number>(0);

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

  const updateBalance = (newBalance: number) => {
    setBalance(newBalance);
    AsyncStorage.setItem('balance', newBalance.toString());
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
