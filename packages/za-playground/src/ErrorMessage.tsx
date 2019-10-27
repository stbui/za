import React from 'react';

export function ErrorMessage({ error, ...htmlProps }) {
    return <pre {...htmlProps}>{error.toString()}</pre>;
}
