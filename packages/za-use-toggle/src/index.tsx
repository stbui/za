import { useCallback, useState } from 'react';

const useToggle = (initial = false) => {
    const [open, setOpen] = useState(initial);

    const toggle = useCallback(() => setOpen(state => !state), []);

    return [open, toggle];
};

export default useToggle;
