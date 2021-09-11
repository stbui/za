# Upload 上传

文件选择上传和拖拽上传控件。

# 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

-   当需要上传一个或一些文件时
-   当需要展现上传的进度时
-   当需要使用拖拽交互时

## Installation

```sh
npm install @stbui/za-alert
```

## 基本使用

```jsx
import Alert from '@stbui/za-alert';

function Example() {
    return (
        <>
            <Alert>Alert</Alert>
        </>
    );
}
```

## 可预览样式

## 拖拽上传

## 文件数量超出

## 用户头像

## 完全控制的上传列表

## 图片列表样式

## 手动上传

## API

> 服务端上传接口实现可以参考 [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki)。

### Upload props

| 参数                | 说明                                                                                                                                                                           | 类型                                                               | 默认值 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ------ |
| accept              | 接受上传的文件类型，多种类型用 "," 分隔或写成数组形式，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)              | String \| Array< String >                                          | -      |
| action              | 必选参数，上传的地址（受控）                                                                                                                                                   | String \| (file) => Promise                                        | -      |
| beforeUpload        | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。**注意：IE9 不支持该方法**。 | (file, fileList) => `Boolean \| Promise`                           | -      |
| className           | 容器类名                                                                                                                                                                       | String                                                             | -      |
| customRequest       | 通过覆盖默认的上传行为，可以自定义自己的上传实现                                                                                                                               | () => Void                                                         | -      |
| data                | 上传所需参数或返回上传参数的方法                                                                                                                                               | Object \| (file) => Object                                         | -      |
| defaultFileList     | 默认已经上传的文件列表                                                                                                                                                         | Array< {uid, name, status, response} >                             | -      |
| disabled            | 是否禁用                                                                                                                                                                       | Boolean                                                            | false  |
| fileList            | 已经上传的文件列表（受控）                                                                                                                                                     | Array< {uid, name, status, response} >                             | -      |
| headers             | 设置上传的请求头部，IE10 以上有效                                                                                                                                              | Object                                                             | -      |
| listType            | 上传列表的内建样式                                                                                                                                                             | Enum {'text', 'picture', 'picture-card'}                           | 'text' |
| maxFileCount        | 文件列表可展示的最大文件数，超出该数值后将展示滚动条，当 listType 为 `text` 时有效                                                                                             | Number                                                             | 5      |
| multiple            | 是否支持多选文件，IE10 以上支持。开启后按住 ctrl 可选择多个文件                                                                                                                | Boolean                                                            | false  |
| name                | 发到后台的文件参数名                                                                                                                                                           | String                                                             | 'file' |
| onChange            | 上传文件改变时的状态，详见下方的 onChange 小节                                                                                                                                 | () => Void                                                         | -      |
| onDeleteAll         | 点击全部删除时的回调                                                                                                                                                           | () => Void                                                         | -      |
| onPreview           | 点击文件链接或预览图标时的回调                                                                                                                                                 | (file) => Void                                                     | -      |
| onRemove            | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。                                                     | (file) => `Boolean \| Promise`                                     | -      |
| showDeleteAll       | 文件列表中的文件数超出 `maxFileCount` 后是否展示 `删除全部`，当 listType 为 `text` 时有效                                                                                      | Boolean                                                            | true   |
| showUploadList      | 是否展示 uploadList, 可设为一个对象，用于单独设定 `showPreviewIcon` 和 `showRemoveIcon`                                                                                        | Boolean \| { showPreviewIcon?: Boolean, showRemoveIcon?: Boolean } | true   |
| style               | 容器样式                                                                                                                                                                       | Object                                                             | -      |
| supportServerRender | 服务端渲染时需要打开这个                                                                                                                                                       | Boolean                                                            | false  |
| tip                 | 上传提示                                                                                                                                                                       | String                                                             | -      |
| withCredentials     | 上传请求时是否携带 cookie                                                                                                                                                      | Boolean                                                            | false  |

### onChange

> 上传中、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```js
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

    ```js
    {
       uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
       name: 'xx.png'   // 文件名
       status: 'done', // 状态有：uploading done error removed
       response: '{"status": "success"}', // 服务端响应内容
       linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
    }
    ```

2. `fileList` 当前的文件列表。
3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

### 显示下载链接

请使用 fileList 属性设置数组项的 url 属性进行展示控制。

### customRequest

-   <https://github.com/react-component/upload#customrequest>

### IE note

-   <https://github.com/react-component/upload#ie89-note>
