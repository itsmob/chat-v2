import { useEffect, useState } from 'react';

//we put the key and we get the value
export const useStorage = (key) => {
  const [value, setValue] = useState(getFromLocalStorage(key));

  useEffect(() => {
    setToLocalStorage(key, value);
  }, [value]);

  return [value, setValue];
};

//create or update a key value pair
const setToLocalStorage = (key, value) => {
  if (typeof value === 'object' && value) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

//read a key value pair
const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value); //incase of json is stored;
  } catch (error) {
    //silently return the value;
    return value;
  }
};

//delete a key value pair
const deleteFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
