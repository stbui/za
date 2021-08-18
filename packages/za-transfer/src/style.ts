import styled from 'styled-components';

export const TransferStyle = styled.div`
    @keyframes fishdCheckboxEffect {
        0% {
            transform: scale(1);
            opacity: 0.5;
        }
        100% {
            transform: scale(1.6);
            opacity: 0;
        }
    }

    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;

    .transfer-list {
        border: 1px solid #e1e3e6;
        display: inline-block;
        border-radius: 2px;
        vertical-align: middle;
        position: relative;
        width: 200px;
        height: 240px;
        padding-top: 34px;
    }
    .transfer-list-with-footer {
        padding-bottom: 34px;
    }
    .transfer-list-search {
        padding: 0 8px;
    }
    .transfer-list-search-action {
        color: #999;
        position: absolute;
        top: 4px;
        right: 4px;
        bottom: 4px;
        width: 28px;
        line-height: 32px;
        text-align: center;
    }
    .transfer-list-search-action .fishdicon {
        transition: all 0.3s;
        color: #999;
    }
    .transfer-list-search-action .fishdicon:hover {
        color: #666;
    }
    span.transfer-list-search-action {
        pointer-events: none;
    }
    .transfer-list-header {
        padding: 6px 12px;
        border-radius: 2px 2px 0 0;
        background: #fff;
        color: #333;
        border-bottom: 1px solid #e9e9e9;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 32px;
    }
    .transfer-list-header-title {
        position: absolute;
    }
    .transfer-list-header-selected {
        position: absolute;
        right: 12px;
    }
    .transfer-list-body {
        font-size: 14px;
        position: relative;
        height: 100%;
    }
    .transfer-list-body-search-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        padding: 4px;
        width: 100%;
    }
    .transfer-list-body-with-search {
        padding-top: 40px;
    }
    .transfer-list-content {
        height: 100%;
        overflow: auto;
        /* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸 */
        /* 定义滑块 内阴影+圆角 */
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .transfer-list-content::-webkit-scrollbar {
        width: 4px;
        height: 0;
        background-color: #fff;
    }
    .transfer-list-content::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: rgba(153, 153, 153, 0.8);
    }
    .transfer-list-content > .LazyLoad {
        animation: transferHighlightIn 1s;
    }
    .transfer-list-content-item {
        padding: 6px 12px;
        min-height: 32px;
        transition: all 0.3s;
        display: -ms-flexbox;
        display: flex;
    }
    .transfer-list-content-item-text {
        -ms-flex: 1;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .transfer-list-content-item-close {
        display: inline-block;
        width: 14px;
        height: 100%;
        text-align: center;
        font-size: 12px;
        color: #999;
    }
    .transfer-list-content-item-close:hover {
        color: #666;
    }
    .transfer-list-content-item:not(.transfer-list-content-item-disabled):hover {
        cursor: pointer;
        background-color: #f7f8fa;
    }
    .transfer-list-content-item-disabled {
        cursor: not-allowed;
        color: #999;
    }
    .transfer-list-body-not-found {
        padding-top: 0;
        color: #999;
        text-align: center;
        display: none;
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -10px;
    }
    .transfer-list-content:empty + .transfer-list-body-not-found {
        display: block;
    }
    .transfer-list-footer {
        border-top: 1px solid #e9e9e9;
        border-radius: 0 0 2px 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .transfer-operation {
        display: inline-block;
        overflow: hidden;
        margin: 0 8px;
        vertical-align: middle;
    }
    .transfer-operation .btn {
        display: block;
    }
    .transfer-operation .btn:first-child {
        margin-bottom: 4px;
    }
    .transfer-operation .btn .fishdicon {
        font-size: 12px;
    }
    @keyframes transferHighlightIn {
        0% {
            background: #d6e5ff;
        }
        100% {
            background: transparent;
        }
    }
`;

export default TransferStyle;
