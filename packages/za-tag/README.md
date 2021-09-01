# Tag 标签

进行标记和分类的小标签。

## 何时使用

-   用于标记事物的属性和维度。
-   进行分类。

## Installation

```sh
npm install @stbui/za-tag
```

## 基本

```jsx
import React from 'react';
import Tag from '@stbui/za-tag';

export default () => <Tag>Tag</Tag>;
```

## 可关闭标

```jsx
/**
 * desc: 基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 `onClose` `afterClose` 两个事件。
 */
import React from 'react';
import Tag from '@stbui/za-tag';

export default () => {
    return (
        <div>
            <Tag>Tag 1</Tag>
            <Tag>
                <a href="https://github.com/stbui">Link</a>
            </Tag>
            <Tag closable>Tag 2</Tag>
            <Tag closable>Prevent Default</Tag>
        </div>
    );
};
```

## 自定义标签颜色

```jsx
/**
 * desc: 可以为标签设置具体的色值。
 */
import React from 'react';
import Tag from '@stbui/za-tag';

export default () => (
    <div>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
    </div>
);
```

## 动态添加和删除

:::demo 用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 `afterClose` 实现。

```js
  constructor() {
    super();
    this.state = {
      tags: ['Unremovable', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
    };
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: '#fff', border: '1px dashed #e1e3e6' }}
          >
            <Icon type="upload-plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
```

:::

## 可选择

:::demo 可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。该组件为完全受控组件，不支持非受控用法。

```js
    constructor() {
      super();
      this.state = {
        checked: true
      }
    }

    handleChange = (checked) => {
      this.setState({ checked });
    }

    render() {
      const { CheckableTag } = Tag;
      return (
        <div>
          <CheckableTag checked={this.state.checked} onChange={this.handleChange}>
            tag1
          </CheckableTag>
        </div>
      );
    }
```

:::

## API

### Tag

| 参数          | 说明                                                                           | 类型        | 默认值 |
| ------------- | ------------------------------------------------------------------------------ | ----------- | ------ |
| afterClose    | 关闭动画完成后的回调                                                           | () => Void  | -      |
| autoShowClose | 标签可关闭时，是否自动展示关闭按钮。设置为 false 时，需 hover 到标签上才展示。 | Boolean     | true   |
| className     | 容器类名                                                                       | String      | -      |
| closable      | 标签是否可以关闭                                                               | Boolean     | false  |
| color         | 标签色                                                                         | String      | -      |
| onClose       | 关闭时的回调                                                                   | (e) => Void | -      |
| style         | 自定义内联样式                                                                 | Object      | -      |
| visible       | 是否显示标签                                                                   | Boolean     | true   |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | Boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => Void | -      |
