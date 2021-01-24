// @ts-nocheck
import React from 'react';
import FieldContext from './FiledContext';

class Field extends React.Component<any> {
  static contextType = FieldContext;

  private cancelRegisterFunc;

  private mounted = false;

  state = {
    resetCount: 0,
  };

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

  onStoreChange(_prevStore, _namePathList, info) {
    switch (info.type) {
      case 'reset':
        this.refresh();
        break;

      default:
        this.reRender();
        break;
    }
  }

  getCntrolled = (childProps = {}) => {
    const { getFieldValue, setFieldValue } = this.context;
    const { name } = this.props;

    const originTriggerFunc: any = childProps.onChange;

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
      },
    };

    return control;
  };

  render() {
    const { children } = this.props;
    const { resetCount } = this.state;
    let returnChildNode: React.ReactNode;
    if (typeof children === 'function') {
      returnChildNode = children(this.getCntrolled());
    } else {
      // @ts-ignore
      returnChildNode = React.cloneElement(children, this.getCntrolled());
    }

    return <React.Fragment key={resetCount}>{returnChildNode}</React.Fragment>;
  }
}
export default Field;
