import React from 'react';

const FieldContext = React.createContext({ onFinish: () => {}, submit: () => {}, onFinishFailed: () => {} });

export default FieldContext;
