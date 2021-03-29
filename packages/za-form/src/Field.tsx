// @ts-nocheck
import React from 'react';
import FieldContext from './FiledContext';
import { validateRules } from './validateUtil';

class Field extends React.Component {
    static contextType = FieldContext;

    errors = [];
    validatePromise = null;

    state = {
        resetCount: 0,
    };

    constructor(props) {
        super(props);

        if (props.fieldContext) {
            props.fieldContext.initEntityValue(this);
        }
    }

    componentDidMount() {
        // eslint-disable-next-line react/destructuring-assignment
        this.cancelRegisterFunc = this.context.registerEntity(this);

        this.mounted = true;
    }

    componentWillUnmount() {
        if (this.cancelRegisterFunc) {
            this.cancelRegisterFunc();
        }

        this.cancelRegisterFunc = null;
        this.mounted = false;
    }

    getNamePath() {
        const { name } = this.props;
        return name;
    }

    reRender() {
        if (!this.mounted) return;
        this.forceUpdate();
    }

    refresh = () => {
        if (!this.mounted) return;
        // @ts-ignore
        this.setState(({ resetCount }) => ({
            resetCount: resetCount + 1,
        }));
    };

    onStoreChange = (_prevStore, _namePathList, info) => {
        switch (info.type) {
            case 'reset':
                this.validatePromise = null;
                this.errors = [];

                this.refresh();
                return;
                break;

            case 'setField':
                const { data } = info;
                if ('errors' in data) {
                    this.errors = data.errors || [];
                }

                this.reRender();
                return;
                break;

            default:
                this.reRender();

                break;
        }
    };

    getControlled = (childProps = {}) => {
        const { getFieldValue, setFieldValue, validateFields } = this.context;
        const { name, rules } = this.props;

        const originTriggerFunc = childProps.onChange;

        const value = getFieldValue(name);

        const control = {
            ...childProps,
            value,
            onChange: (...args) => {
                let newVal = args[0];
                const event = args[0];

                if (event && event.target) {
                    newVal = event.target.value;
                } else if (event && event.value) {
                    newVal = event.value;
                }

                setFieldValue({ [name]: newVal });

                if (originTriggerFunc) {
                    originTriggerFunc(...args);
                }

                if (rules || rules.length) {
                    validateFields({ name });
                }
            },
        };

        return control;
    };

    getRules = () => {
        const { rules = [], fieldContext } = this.props;

        return rules.map(rule => {
            if (typeof rule === 'function') {
                return rule(fieldContext);
            }
            return rule;
        });
    };

    validateRules = () => {
        const { getFieldValue } = this.context;
        const { name } = this.props;
        const currentValue = getFieldValue(name);

        const rootPromise = Promise.resolve().then(() => {
            if (!this.mounted) {
                return {};
            }

            let filteredRules = this.getRules();

            const promise = validateRules(
                name,
                currentValue,
                filteredRules,
                {},
                false
            );

            promise
                .catch(e => e)
                .then((errors = []) => {
                    if (this.validatePromise === rootPromise) {
                        this.validatePromise = null;
                        this.errors = errors;
                        this.reRender();
                    }
                });

            return promise;
        });

        this.validatePromise = rootPromise;
        this.errors = [];
        this.reRender();
        return rootPromise;
    };

    getMeta = () => {
        const { name } = this.props;

        const meta = {
            errors: this.errors,
            name,
        };

        return meta;
    };

    getOnlyChild = children => {
        const meta = this.getMeta();

        return children(this.getControlled(), meta, this.props.fieldContext);
    };

    render() {
        const { children } = this.props;
        const { resetCount } = this.state;

        let returnChildNode;
        if (typeof children === 'function') {
            returnChildNode = this.getOnlyChild(children);
        } else {
            // @ts-ignore
            returnChildNode = React.cloneElement(
                children,
                this.getControlled()
            );
        }

        return (
            <React.Fragment key={resetCount}>{returnChildNode}</React.Fragment>
        );
    }
}

function WrapperField({ name, ...restProps }) {
    const fieldContext = React.useContext(FieldContext);

    return (
        <Field
            key="keep"
            name={name}
            {...restProps}
            fieldContext={fieldContext}
        />
    );
}

export default WrapperField;
