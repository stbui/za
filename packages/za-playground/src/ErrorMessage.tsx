import React from 'react';

export function ErrorMessage({ error, unstable_system, ...htmlProps }) {
    return <pre {...htmlProps}>{error.toString()}</pre>;
}
