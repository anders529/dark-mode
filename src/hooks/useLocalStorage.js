import {useState} from 'react';

export const useLocalStorage = (DarkMode, setDarkMode, key) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        else {
            localStorage.setItem(key, JSON.stringify(setDarkMode));
            return setDarkMode;
        }
    });
    const setValue = newValue => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(setDarkMode));
    };
    return [storedValue, setValue];
};
export default useLocalStorage;