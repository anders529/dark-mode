import {useEffect} from 'react';
import {uselocalStorage} from '../hooks/useLocalStorage';

export const DarkMode = () => {
    const [value, setValue] = uselocalStorage('dark-mode')
    useEfect( () => {
        value ? document.body.classlist.add('dark-mode')
        : document.body.classlist.remove('dark-mode')
    }, [value])
    return [value, setValue];
}