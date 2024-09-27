import { useEffect, useState } from 'react';

const useImagePreload = (src) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setIsLoaded(false); // Handle error loading if needed

        return () => {
            // Cleanup if necessary
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    return isLoaded;
};

export default useImagePreload;
