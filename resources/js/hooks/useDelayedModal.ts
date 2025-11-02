import { useState, useEffect } from 'react';

export function useDelayedModal(delay: number = 30000) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const closeModal = () => setIsOpen(false);

    return { isOpen, closeModal };
}
