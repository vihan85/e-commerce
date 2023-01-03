import { useEffect, useState } from 'react';
/**
 * useDebounce => ger final value after 'delay' time
 * @param {string} value => search value
 * @param {*} delay  => time of setTimeout
 * @returns => value final after delay time
 */
function useDebounce(value, delay) {
    const [deboundce, setDebounce] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => {
            clearTimeout(handle);
        };
    }, [value]);
    return deboundce;
}
export default useDebounce;
