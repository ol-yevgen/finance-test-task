import { useState, useEffect } from 'react';
import {
    SCREEN_S, SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_L, SCREEN_XL, SCREEN_XXL,
} from '../lib/constBreakpoints';

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isScreenS: width >= SCREEN_S,
        isScreenSm: width >= SCREEN_SM,
        isScreenMd: width >= SCREEN_MD,
        isScreenLg: width >= SCREEN_LG,
        isScreenL: width >= SCREEN_L,
        isScreenXl: width >= SCREEN_XL,
        isScreenXxl: width >= SCREEN_XXL,
    };
};