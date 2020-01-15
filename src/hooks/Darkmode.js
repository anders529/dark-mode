import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const DarkMode = () => {
    const [shit, setShit] = useLocalStorage('dark-mode')
    useEfect(() => {
        shit 
        ? document.body.classlist.add('dark-mode')
        : document.body.classlist.remove('dark-mode')
    }, [shit])
    return [shit, setShit];
}
export default DarkMode;