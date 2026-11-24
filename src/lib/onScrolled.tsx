import { useEffect, useState } from 'react';

export default function useOnScrolled() {
    const [onScrolled, setOnScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            setOnScrolled(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScrolled);

        return () => window.removeEventListener("scroll", handleScrolled)
    }, [])

  return onScrolled;
}
