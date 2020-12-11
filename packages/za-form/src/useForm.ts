import React from 'react';

class FormStore {
  private store = {};

  private fieldEntities = {};

  private callbacks = {};

  constructor() {
    this.store = {};
    this.fieldEntities = {};
    this.callbacks = {};
  }

  setCallbacks = callback => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };

  registerEntity = entity => {
    this.fieldEntities = {
      ...this.fieldEntities,
      [entity.props.name]: entity,
    };

    return () => {
      delete this.fieldEntities[entity.props.name];
    };
  };

  getFieldValue = (name: string) => {
    return this.store[name];
  };

  setFieldValue = newStore => {
    const prevStore = this.store;

    this.store = {
      ...this.store,
      ...newStore,
    };

    Object.keys(newStore).forEach(name => {
      this.fieldEntities[name].onStoreChange(prevStore, null, {});
    });
  };

  resetFields = () => {
    const prevStore = this.store;
    this.store = {};

    Object.keys(prevStore).forEach(name => {
      this.fieldEntities[name].onStoreChange(prevStore, null, { type: 'reset' });
    });
  };

  getFieldError = () => {};

  getFieldsError = () => {};

  validate = () => {
    const err: any = [];

    Object.keys(this.fieldEntities).forEach(key => {
      const entity = this.fieldEntities[key];
      const { rules } = entity.props;
      const value = this.getFieldValue(key);
      // 获取校验规则,这里值校验了一条规则
      const rule = rules && rules[0];
      if (rule && rule.required && value === undefined) {
        err.push({
          [key]: rule.message,
          value,
        });
      }
    });

    return err;
  };

  submit = () => {
    // @ts-ignore
    const { onFinish, onFinishFailed } = this.callbacks;
    const err = this.validate();
    if (err.length === 0) {
      onFinish && onFinish({ ...this.store });
    } else {
      onFinishFailed && onFinishFailed(err, { ...this.store });
    }
  };

  getForm() {
    return {
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      registerEntity: this.registerEntity,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      resetFields: this.resetFields,
      errors: this.validate,
    };
  }
}

const useForm = form => {
  const formRef = React.useRef();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      // @ts-ignore
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
};

export default useForm;
