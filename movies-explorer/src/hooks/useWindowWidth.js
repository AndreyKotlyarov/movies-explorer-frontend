import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState([
        window.innerWidth,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // window.addEventListener('resize', () => { setTimeout(handleWindowResize, 20) });
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return windowWidth;
}
export default useWindowWidth;