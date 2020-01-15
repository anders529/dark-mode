import {useState} from 'react';

export const useLocalStorage = (DarkMode, setDarkMode) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });
    const setValue = newValue => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(initialValue));
    };
    return [storedValue, setValue];
};