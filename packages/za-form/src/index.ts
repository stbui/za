import React from 'react';
import _Form from './Form';
import Field from './Field';
import useForm from './useForm';

const Form = React.forwardRef(_Form);
// @ts-ignore
Form.useForm = useForm;

export { Field };
export default Form;
