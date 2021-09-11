# 快速上手

stbui 是一个低级组件库，用于构建可访问的高级 ui 库、设计系统和带有 react 的应用程序。

## 安装

```base
npm install @stbui/za
```

## 基本使用

```tsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@stbui/za-button';

ReactDOM.render(
    <Button type="primary">Primary</Button>,
    document.getElementById('app')
);
```

## 使用 CDN 上的组件库

```html
<html>
  <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.0/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@stbui/za@0.0.1/dist/za.min.js"></script>

    <script type="text/jsx">
      console.log(window['za'])
      const Select = window['za'].Select;
      const Button = window['za'].Button;
      class App extends React.Component {
        render() {
          return (
            <div className="demo-select">
              <Select mode={'multiple'} errorMessage={'最多仅能选择3项'} labelClear maxCount={3} style={{width: 300, margin: 10}} showSelectAll>
                <Select.Option value={"1"}>{'选项1'}</Select.Option>
                <Select.Option value={"2"} disabled>{'选项2'}</Select.Option>
                <Select.Option value={"3"}>{'选项3'}</Select.Option>
                <Select.Option value={"4"}>{'比较长的选项比较长的选项-选项4'}</Select.Option>
                <Select.Option value={"5"}>{'选项5'}</Select.Option>
              </Select>
            </div>
          )
        }
      }

      ReactDOM.render(<App/>, document.getElementById('root'));
    </script>
  </body>
</html>
```
