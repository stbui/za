# Upload 上传

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

-   当需要上传一个或一些文件时
-   当需要展现上传的进度时
-   当需要使用拖拽交互时

## 基本使用

:::demo 经典款式，用户点击按钮弹出文件选择框。

```js
render() {
  const props = {
    name: 'file',
    tip: '这里是上传提示',
    action: '//jsonplaceholder.typicode.com/posts/',
    defaultFileList: [{
      uid: 1,
      name: 'xxx.png',
      status: 'done',
      response: 'custom message',
    }, {
      uid: 2,
      name: 'yyy.png',
      status: 'done',
    }],
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...props}>
      <Button type="primary" style={{display: 'inline-flex',alignItems: 'center'}}>
        <Icon type="upload-line" style={{fontSize:'20px'}} /> 上传
      </Button>
    </Upload>
  );
}
```

:::

## 可预览样式

:::demo 用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。

```js

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: '//ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
    }],
  };

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList, previewVisible: false });
  handleCancel = () => this.setState({ previewVisible: false });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="upload-plus" />
        <div className="fishd-upload-text">上传图片</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          tip="这里是上传提示"
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal title={null} visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="图片" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
```

```less
/* you can make up upload button and sample style by using stylesheets */
.fishd-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}
.fishd-upload-select-picture-card .fishd-upload-text {
    margin-top: 8px;
    color: #666;
}
```

:::

## 拖拽上传

:::demo 把文件拖入指定区域，完成上传，同样支持点击上传。

设置 `multiple` 后，在 `IE10+` 可以一次上传多个文件。

```js

render(){
  const Dragger = Upload.Dragger;
  const props = {
    name: 'file',
    multiple: true,
    tip: '这里是上传提示',
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Dragger {...props}>
      <p className="fishd-upload-drag-icon">
        <Icon type="upload-cloud" />
      </p>
      <p className="fishd-upload-text">
        将文件拖到此处，或<span className="fishd-upload-text-hl">点击上传</span>
      </p>
    </Dragger>
  )
}
```

:::

## 文件数量超出

:::demo 使用 `defaultFileList` 设置已上传的内容。

```js
render() {
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    tip: '这里是上传提示',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    onDeleteAll() {
      console.log('delete all');
    },
    defaultFileList: [{
      uid: 1,
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
    }, {
      uid: 2,
      name: 'yyy.png',
      status: 'done',
    }, {
      uid: 3,
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
    }, {
      uid: 4,
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
    }, {
      uid: 5,
      name: 'yyy.png',
      status: 'done',
    }, {
      uid: 6,
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
    }, {
      uid: 7,
      name: 'yyy.png',
      status: 'done',
    }],
  };
  return (
    <Upload {...props}>
      <Button type="primary" style={{display: 'inline-flex',alignItems: 'center'}}>
        <Icon type="upload-line" style={{fontSize:'20px'}} /> 上传
      </Button>
    </Upload>
    )
  }
```

:::

## 用户头像

:::demo 点击上传用户头像，并使用 `beforeUpload` 限制用户上传的图片格式和大小。

`beforeUpload` 的返回值可以是一个 Promise 以支持也支持异步检查：[示例](http://react-component.github.io/upload/examples/beforeUpload.html)。

```js
  state = {
    loading: false,
  };

  handleChange = (info) => {
    function getBase64(img, callback) {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
    }
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    function beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      if (!isJPG) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJPG && isLt2M;
    }
    const uploadButton = (
      <div>
        { this.state.loading ?  <Spin /> : <Icon type="upload-plus"/> }
        <div className="fishd-upload-text">上传图片</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        tip="这里是上传提示"
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
```

```less
.avatar-uploader > .fishd-upload {
    width: 100px;
    height: 100px;
}
```

:::

## 完全控制的上传列表

:::demo 使用 `fileList` 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况：

1. 上传列表数量的限制。

2. 读取远程路径并显示链接。

3. 按照服务器返回信息筛选成功上传的文件。

```js
  state = {
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
    }],
  }

  handleChange = (info) => {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });

    this.setState({ fileList });
  }

  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      tip: '这里是上传提示',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button type="primary" style={{display: 'inline-flex',alignItems: 'center'}}>
          <Icon type="upload-line" style={{fontSize:'20px'}} /> 上传
        </Button>
      </Upload>
    );
  }

```

:::

## 图片列表样式

:::demo 上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。

```js
render(){
  const fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: '//ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
    thumbUrl: '//ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
  }];

  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
    tip: '这里是上传提示',
  };

  const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    tip: '这里是上传提示',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
  };
  return (
    <div>
      <Upload {...props}>
        <Button type="primary" style={{display: 'inline-flex',alignItems: 'center'}}>
          <Icon type="upload-line" style={{fontSize:'20px'}} /> 上传
        </Button>
      </Upload>
      <br />
      <br />
      <Upload {...props2}>
        <Button type="primary" style={{display: 'inline-flex',alignItems: 'center'}}>
          <Icon type="upload-line" style={{fontSize:'20px'}} /> 上传
        </Button>
      </Upload>
    </div>
  )
}

```

```less
/* tile uploaded pictures */
.upload-list-inline .fishd-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
}
.upload-list-inline .fishd-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
}
.upload-list-inline .fishd-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
}
```

:::

## 手动上传

:::demo `beforeUpload` 返回 `false` 后，手动上传文件。

```js
  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    const xhr = new XMLHttpRequest();
    xhr.onerror = () => {
      this.setState({
        uploading: false,
      });
      message.error('upload failed.');
    };
    xhr.onload = () => {
      this.setState({
        fileList: [],
        uploading: false,
      });
      message.success('upload successfully.');
    };
    xhr.open('post', '//jsonplaceholder.typicode.com/posts/', true);
    xhr.send(formData);
  }

  render() {
    const { uploading } = this.state;
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      tip: '这里是上传提示',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };

    return (
      <div>
        <Upload {...props}>
          <Button type="primary" style={{display: 'inline-flex',alignItems: 'center'}}>
            <Icon type="upload-line" style={{fontSize:'20px'}} /> 选择文件
          </Button>
        </Upload>
        <Button
          className="upload-demo-start"
          type="primary"
          onClick={this.handleUpload}
          disabled={this.state.fileList.length === 0}
          loading={uploading}
        >
          {uploading ? '上传中' : '开始上传' }
        </Button>
      </div>
    );
  }

```

```less
.upload-demo-start {
    margin-top: 16px;
}
```

:::

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
