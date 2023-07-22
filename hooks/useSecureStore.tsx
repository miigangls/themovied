import * as SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";

export default function useSecureStore(key: string , initialValue: any) {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (key: string ) => {
    try {
      const dataValue = await SecureStore.getItemAsync(key)
      const value = JSON.parse(dataValue ? dataValue : "");
      if (value) setStoredValue(value);
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchData(key);
  }, []);

  const setValue = (value: any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    SecureStore.setItemAsync(key, JSON.stringify(valueToStore));
  };

  const deleteValue = async (key: string) => {
    setLoading(true);
    await SecureStore.deleteItemAsync(key);
    setStoredValue(null);
    setLoading(false);
  };

  return [storedValue, setValue, loading, setLoading, error, setError, deleteValue];
}