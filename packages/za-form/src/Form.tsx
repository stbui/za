// @ts-nocheck
import React, { useImperativeHandle } from 'react';
import useForm from './useForm';
import FieldContext from './FiledContext';

const Form = ({
  children,
  form,
  onFinish,
  onFinishFailed,
  initialValues,
  component: Component = 'form',
  ...restProps
}: any, ref) => {
  const [formInstance] = useForm(form);


  useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    formInstance.submit();
  };

  return (
    <Component {...restProps} onSubmit={onSubmit}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </Component>
  );
};

export default Form;
