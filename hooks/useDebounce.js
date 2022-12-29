import { useEffect, useState } from 'react';

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
