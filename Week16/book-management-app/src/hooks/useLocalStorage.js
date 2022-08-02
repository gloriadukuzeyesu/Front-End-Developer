import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  //code passed in useState are executed only once.

  const [value, setValue] = useState(() => {
    //check if there is any value in local storage with provided key
    //return the value by analyising it using JSON.Parse method
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  // if there is anychaneg in the key or value. the local storage will be update using useEffect
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //return the value stored in local storage and SetValue function which will call the updated local storage data.

  return [value, setValue];
};

export default useLocalStorage;
