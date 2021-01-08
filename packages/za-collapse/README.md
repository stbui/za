# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 折叠面板

:::demo 可以同时展开多个面板，这个例子默认展开了第一个。

```js
callback=(key) => {
  console.log(key);
};

render(){
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const Panel = Collapse.Panel;
  return(
      <Collapse defaultActiveKey={['1']} onChange={this.callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" disabled>
          <p>{text}</p>
        </Panel>
      </Collapse>
  )
}
```

```less
p {
  margin: 0;
}
```
:::
 
## 手风琴

:::demo 手风琴，每次只打开一个tab。默认打开第一个。

```js
render(){
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const Panel = Collapse.Panel;
  return(
   <Collapse accordion>
     <Panel header="This is panel header 1" key="1">
       <p>{text}</p>
     </Panel>
     <Panel header="This is panel header 2" key="2">
       <p>{text}</p>
     </Panel>
     <Panel header="This is panel header 3" key="3">
       <p>{text}</p>
     </Panel>
   </Collapse>
  )
}
```

```less
p {
  margin: 0;
}
```
:::

## 面板嵌套

:::demo 嵌套折叠面板。

```js
callback=(key) => {
  console.log(key);
};

render(){
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const Panel = Collapse.Panel;
  return(
      <Collapse onChange={this.callback}>
        <Panel header="This is panel header 1" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="This is panel nest panel" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
  )
}
```

```less
p {
  margin: 0;
}
```
:::

## 激活后将激活的面板置顶

:::demo 容器的高度有限展示不下折叠面板出现滚动条时，可以设置该属性，开启激活后自动将激活面板置顶的功能。

```js
render(){
  const Panel = Collapse.Panel;
  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </p>
  );
  return(
      <Collapse 
        accordion={true}
        onChange={this.callback}
        isScrollToHeader
        defaultActiveKey={['1']}
        className="collapse-demo"
      >
        <Panel header="This is panel header 1" key="1">
          {text}
        </Panel>
        <Panel header="This is panel header 2" key="2">
          {text}
        </Panel>
        <Panel header="This is panel header 3" key="3">
          {text}
        </Panel>
        <Panel header="This is panel header 4" key="4">
          {text}
        </Panel>
        <Panel header="This is panel header 5" key="5">
          {text}
        </Panel>
        <Panel header="This is panel header 6" key="6">
          {text}
        </Panel>
        <Panel header="This is panel header 7" key="7">
          {text}
        </Panel>
        <Panel header="This is panel header 8" key="8">
          {text}
        </Panel>
        <Panel header="This is panel header 9" key="9">
          {text}
        </Panel>
      </Collapse>
  )
}
```
```less
.collapse-demo {
  height: 260px;
}
```
:::

## 自定义面板

:::demo 自定义各个面板的背景色、圆角和边距。

```js
render(){
  const Panel = Collapse.Panel;
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
  return(
  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
  </Collapse>)
  }
```

```less
.p {
  margin: 0;
}
```

:::


## 可关闭

:::demo 使用 showClose={false} 关闭删除功能。
```js

constructor() {
  super();
  this.state = {
    statusList: [true,true,true], // statusList 指定面板是否显示，实际使用时，可以将此数组储存在服务端。

  }
}
// 删除的回调函数  参数为更新过的状态数组
close = (statusList) => {
  this.setState({
    statusList: statusList,
  })
}

callback=(key) => {
  console.log(key);
};

render(){
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const Panel = Collapse.Panel;
  return(
      <Collapse showClose={true} statusList={this.state.statusList} close={this.close}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
  )
}
```

```less
.p {
  margin: 0;
}
```
:::

## 定制 header

:::demo header 支持传入一个函数，函数参数为面板的状态（展开为 true，收起为 false）可使用此状态定义展开和收起的图标。

```js
callback = (key) => {
  console.log(key);
};

getHeader=(status) => {
  return (
      <div><Icon className="icon" type={`${status ? 'minus-square' : 'plus-square' }`} style={{marginRight:20,marginLeft:16}}></Icon>自定义  header</div>
  )
}

render(){
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const Panel = Collapse.Panel;
  return(
      <Collapse onChange={this.callback}>
        <Panel header={this.getHeader} key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
  )
}
```

```less
.p {
  margin: 0;
}
```
:::

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accordion | 手风琴，每次只打开一个tab。默认打开第一个。 | Boolean | false |
| activeKey | 受控属性，控制当前激活的面板 | Array< String > \| String | 默认无，accordion模式下默认第一个元素 |
| bordered | 是否显示边框 | Boolean | true |
| close | 删除面板的回调 | (statusList: Array) => Void | - |
| defaultActiveKey | 初始化选中面板的 key | String | - |
| isScrollToHeader | 激活后将激活的面板置顶 | Boolean | - |
| onChange | 切换面板的回调 | (key) => Void | - |
| showClose | 是否开启删除功能；开启后，需传入 statusList 属性| Boolean | false |
| statusList | 受控属性，控制每一个面板是否显示的数组 | Array< Boolean > | [true, true, ...] |

### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | Boolean | false |
| header | 面板头内容 | String | () => ReactNode | HTMLElement | - |
| key | 对应 activeKey | String | - |
