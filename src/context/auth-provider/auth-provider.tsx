import React, {createContext, ReactNode, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  user: User | null;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setUser: () => null,
  user: null,
  isLoading: false,
  setLoading: () => null,
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving user from AsyncStorage:', error);
      }
    };

    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!user,
        user,
        setUser,
        isLoading,
        setLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
