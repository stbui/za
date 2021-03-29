// @ts-nocheck
import React from 'react';

class FormStore {
    constructor() {
        this.store = {};
        this.fieldEntities = {};
        this.callbacks = {};
        this.initialValues = {};
    }

    initEntityValue = entity => {
        const { initialValue, name } = entity.props;

        if (initialValue !== undefined) {
            const prevValue = this.store[name];

            if (prevValue === undefined) {
                this.store = { ...this.store, [name]: initialValue };
            }
        }
    };

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

    setFields = fields => {
        // const prevStore = this.store;
        fields.forEach(field => {
            this.fieldEntities[field.name].onStoreChange(field, null, {
                type: 'setField',
                data: field,
            });
        });
    };

    getFieldsValue = () => {
        return this.store;
    };

    getFieldValue = name => {
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
            this.fieldEntities[name].onStoreChange(prevStore, null, {
                type: 'reset',
            });
        });
    };

    getFieldError = name => {
        const fieldError = this.getFieldsError([name])[0];
        return fieldError.errors;
    };

    getFieldsError = name => {
        const fieldEntities = this.fieldEntities[name];
        console.log('fieldEntities', fieldEntities);
    };

    validateFields = ({ name }) => {
        const entity = this.fieldEntities[name];
        const promise = entity.validateRules();

        const errList = [];

        promise
            .then(() => ({ name: name, errors: [] }))
            .catch(errors => {
                errList.push({
                    name: name,
                    errors,
                });
                return Promise.reject({
                    name: name,
                    errors,
                });
            });
    };

    validate = () => {
        const errList = [];

        Object.keys(this.fieldEntities).forEach(key => {
            const entity = this.fieldEntities[key];
            const { name } = entity.props;

            const promise = entity.validateRules();
            promise
                .then(() => ({ name, errors: [] }))
                .catch(errors => {
                    errList.push({
                        name: name,
                        errors,
                    });
                    return Promise.reject({
                        name: name,
                        errors,
                    });
                });
        });

        return errList;
    };

    submit = () => {
        // @ts-ignore
        const { onFinish, onFinishFailed } = this.callbacks;
        const err = this.validate();
        console.log(err);
        if (err.length === 0) {
            onFinish && onFinish({ ...this.store });
        } else {
            onFinishFailed && onFinishFailed(err, { ...this.store });
        }
    };

    setInitialValues = initialValues => {
        this.initialValues = initialValues || {};

        this.store = {
            ...this.store,
            ...initialValues,
        };
    };

    getForm() {
        return {
            validateFields: this.validateFields,
            initEntityValue: this.initEntityValue,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            setFieldValue: this.setFieldValue,
            registerEntity: this.registerEntity,
            submit: this.submit,
            setCallbacks: this.setCallbacks,
            resetFields: this.resetFields,
            setFields: this.setFields,
            errors: this.validate,
            getFieldError: this.getFieldError,
            getFieldsError: this.getFieldsError,
            setInitialValues: this.setInitialValues,
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
