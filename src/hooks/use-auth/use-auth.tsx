import {useContext} from 'react';
import {AuthContext, User} from '../../context/auth-provider/auth-provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE_KEY = 'user';
const SIMULATION_DELAY = 1000;

export const useAuth = () => {
  const {isLoggedIn, setUser, isLoading, setLoading} = useContext(AuthContext);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, SIMULATION_DELAY));
      const storedUser = await AsyncStorage.getItem(USER_STORAGE_KEY);

      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          setUser(user);
          return {error: null, user};
        }
      }

      return {error: new Error('login or password wrong'), user: null};
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, SIMULATION_DELAY));
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      setUser(null);
      return {error: null};
    } catch (error) {
      return {error: error as Error};
    }
  };

  const register = async (userToSave: User) => {
    try {
      await new Promise(resolve => setTimeout(resolve, SIMULATION_DELAY));
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userToSave));
      return {error: null};
    } catch (error) {
      return {error: error as Error};
    }
  };

  return {
    isLoggedIn,
    loginUser,
    logoutUser,
    register,
    isLoading,
  };
};
