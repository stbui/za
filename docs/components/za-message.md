# message 全局提示框

全局展示操作反馈信息。

## 何时使用

-   对用户执行的操作结果进行轻量级的反馈，是一种不打断用户操作的提示方式。
-   顶部居中显示并自动消失，可提供成功、警告和错误等反馈信息。

## 普通提示

```js
import React from 'react';
import Button from '@stbui/za-button';
import message from '@stbui/za-message';

export default () => {
    const info = () => {
        message.info('This is a normal message');
    };

    return (
        <Button type="primary" onClick={info}>
            Display normal message
        </Button>
    );
};
```

## 其它类型提示

```js
import React from 'react';
import Button from '@stbui/za-button';
import message from '@stbui/za-message';

export default () => {
    const success = () => {
        message.success('This is a message of success');
    };

    const error = () => {
        message.error('This is a message of error');
    };

    const warning = () => {
        message.warning('This is message of warning');
    };

    return (
        <div className="components-message-demo-other">
            <Button onClick={this.success}>Success</Button>
            <Button onClick={this.error}>Error</Button>
            <Button onClick={this.warning}>Warning</Button>
        </div>
    );
};
```

## 修改延时

自定义时长 `10s`，默认时长为 `3s`。

```js
import React from 'react';
import Button from '@stbui/za-button';
import message from '@stbui/za-message';

export default () => {
    const success = () => {
        message.success(
            'This is a prompt message for success, and it will disappear in 10 seconds',
            10
        );
    };

    return <Button onClick={success}>Customized display duration</Button>;
};
```

## 加载中

进行全局 loading，异步自行移除。

```js
import React from 'react';
import Button from '@stbui/za-button';
import message from '@stbui/za-message';

export default () => {
    const success = () => {
        const hide = message.loading('Action in progress..', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
    };

    return <Button onClick={this.success}>Display a loading indicator</Button>;
};
```

## Promise 接口

可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

```js
import React from 'react';
import Button from '@stbui/za-button';
import message from '@stbui/za-message';

export default () => {
    const success = () => {
        message
            .loading('Action in progress..', 2.5)
            .then(() => message.success('Loading finished', 2.5))
            .then(() => message.info('Loading finished is finished', 2.5));
    };

    return (
        <Button onClick={this.success}>Display a sequence of message</Button>
    );
};
```

## API

组件提供了一些静态方法，使用方式和参数如下：

-   `message.success(content, [duration], onClose)`
-   `message.error(content, [duration], onClose)`
-   `message.info(content, [duration], onClose)`
-   `message.warning(content, [duration], onClose)`
-   `message.warn(content, [duration], onClose)` // alias of warning
-   `message.loading(content, [duration], onClose)`

| 参数     | 说明                                          | 类型                | 默认值 |
| -------- | --------------------------------------------- | ------------------- | ------ |
| content  | 提示内容                                      | String \| ReactNode | -      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | Number              | 3      |
| onClose  | 关闭时触发的回调函数                          | (e) => Void         | -      |

还提供了全局配置和全局销毁方法：

-   `message.config(options)`
-   `message.destroy()`

组件同时提供 promise 接口

-   `message[level](content, [duration]).then(afterClose)`
-   `message[level](content, [duration], onClose).then(afterClose)`

其中`message[level]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise 。

### message.config

```js
message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
});
```

| 参数         | 说明                                           | 类型              | 默认值              |
| ------------ | ---------------------------------------------- | ----------------- | ------------------- |
| duration     | 默认自动关闭延时，单位秒                       | Number            | 3                   |
| getContainer | 配置渲染节点的输出位置                         | () => HTMLElement | () => document.body |
| maxCount     | 最大显示数, 超过限制时，最早的消息会被自动关闭 | Number            | -                   |
| top          | 消息距离顶部的位置                             | Number            | 24                  |
