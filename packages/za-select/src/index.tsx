import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import RcSelect, { Option, OptGroup } from 'rc-select';

const GlobalStyle = createGlobalStyle`
.za-select-dropdown {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  list-style: none;
  font-size: 14px;
  color: #343434;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.za-select-dropdown-menu {
  max-height: 250px;
  margin-bottom: 0;
  padding-left: 0;
  overflow: auto;
  list-style: none;
  outline: none;
}

.za-select-dropdown-menu-item {
  position: relative;
  display: block;
  padding: 5px 12px;
  overflow: hidden;
  color: #343434;
  font-weight: normal;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background 0.3s ease;
}

.za-select-dropdown-menu-item:first-child {
  border-radius: 4px 4px 0 0;
}

.za-select-dropdown-menu-item:hover:not(.za-select-dropdown-menu-item-disabled) {
  background-color: #e3fcee;
}`;

const Container = styled(RcSelect)`
    .za-select {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #343434;
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: 'tnum', 'tnum';
        position: relative;
        display: inline-block;
        outline: 0;
    }
    .za-select ul,
    .za-select ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .za-select > ul > li > a {
        padding: 0;
        background-color: #fff;
    }
    .za-select-arrow {
        display: inline-block;
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        vertical-align: -0.125em;
        text-rendering: optimizeLegibility;
        position: absolute;
        top: 50%;
        right: 11px;
        margin-top: -6px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 12px;
        line-height: 1;
        transform-origin: 50% 50%;
    }
    .za-select-arrow > * {
        line-height: 1;
    }
    .za-select-arrow svg {
        display: inline-block;
    }
    .za-select-arrow::before {
        display: none;
    }
    .za-select-arrow .za-select-arrow-icon {
        display: block;
    }
    .za-select-arrow .za-select-arrow-icon svg {
        transition: transform 0.3s;
    }
    .za-select-selection {
        display: block;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #e6e6e6;
        border-top-width: 1.02px;
        border-radius: 4px;
        outline: none;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        user-select: none;
    }
    .za-select-selection:hover {
        border-color: #20c980;
        border-right-width: 1px !important;
    }
    .za-select-focused .za-select-selection,
    .za-select-selection:focus,
    .za-select-selection:active {
        border-color: #20c980;
        border-right-width: 1px !important;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(0, 188, 112, 0.2);
    }
    .za-select-selection__clear {
        position: absolute;
        top: 50%;
        right: 11px;
        z-index: 1;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-top: -6px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 12px;
        font-style: normal;
        line-height: 12px;
        text-align: center;
        text-transform: none;
        background: #fff;
        cursor: pointer;
        opacity: 0;
        transition: color 0.3s ease, opacity 0.15s ease;
        text-rendering: auto;
    }
    .za-select-selection__clear::before {
        display: block;
    }
    .za-select-selection__clear:hover {
        color: rgba(0, 0, 0, 0.45);
    }
    .za-select-selection:hover .za-select-selection__clear {
        opacity: 1;
    }
    .za-select-selection-selected-value {
        float: left;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .za-select-no-arrow .za-select-selection-selected-value {
        padding-right: 0;
    }
    .za-select-disabled {
        color: rgba(0, 0, 0, 0.25);
    }
    .za-select-disabled .za-select-selection {
        background: #fafafa;
        cursor: not-allowed;
    }
    .za-select-disabled .za-select-selection:hover,
    .za-select-disabled .za-select-selection:focus,
    .za-select-disabled .za-select-selection:active {
        border-color: #e6e6e6;
        box-shadow: none;
    }
    .za-select-disabled .za-select-selection__clear {
        display: none;
        visibility: hidden;
        pointer-events: none;
    }
    .za-select-disabled
        .ant-select-selection--multiple
        .ant-select-selection__choice {
        padding-right: 10px;
        color: rgba(0, 0, 0, 0.33);
        background: #f5f5f5;
    }
    .za-select-disabled
        .za-select-selection--multiple
        .za-select-selection__choice__remove {
        display: none;
    }
    .za-select-selection--single {
        position: relative;
        height: 32px;
        cursor: pointer;
    }
    .za-select-selection--single .za-select-selection__rendered {
        margin-right: 24px;
    }
    .za-select-no-arrow .za-select-selection__rendered {
        margin-right: 11px;
    }
    .za-select-selection__rendered {
        position: relative;
        display: block;
        margin-right: 11px;
        margin-left: 11px;
        line-height: 30px;
    }
    .za-select-selection__rendered::after {
        display: inline-block;
        width: 0;
        visibility: hidden;
        content: '.';
        pointer-events: none;
    }
    .za-select-lg {
        font-size: 16px;
    }
    .za-select-lg .za-select-selection--single {
        height: 40px;
    }
    .za-select-lg .za-select-selection__rendered {
        line-height: 38px;
    }
    .za-select-lg .za-select-selection--multiple {
        min-height: 40px;
    }
    .za-select-lg
        .za-select-selection--multiple
        .za-select-selection__rendered
        li {
        height: 32px;
        line-height: 32px;
    }
    .za-select-lg .za-select-selection--multiple .za-select-selection__clear,
    .za-select-lg .za-select-selection--multiple .za-select-arrow {
        top: 20px;
    }
    .za-select-sm .za-select-selection--single {
        height: 24px;
    }
    .za-select-sm .za-select-selection__rendered {
        margin-left: 7px;
        line-height: 22px;
    }
    .za-select-sm .za-select-selection--multiple {
        min-height: 24px;
    }
    .za-select-sm
        .za-select-selection--multiple
        .za-select-selection__rendered
        li {
        height: 16px;
        line-height: 14px;
    }
    .za-select-sm .za-select-selection--multiple .za-select-selection__clear,
    .za-select-sm .za-select-selection--multiple .za-select-arrow {
        top: 12px;
    }
    .za-select-sm .za-select-selection__clear,
    .za-select-sm .za-select-arrow {
        right: 8px;
    }
    .za-select-disabled .za-select-selection__choice__remove {
        color: rgba(0, 0, 0, 0.25);
        cursor: default;
    }
    .za-select-disabled .za-select-selection__choice__remove:hover {
        color: rgba(0, 0, 0, 0.25);
    }
    .za-select-search__field__wrap {
        position: relative;
        display: inline-block;
    }
    .za-select-selection__placeholder,
    .za-select-search__field__placeholder {
        position: absolute;
        top: 50%;
        right: 9px;
        left: 0;
        max-width: 100%;
        height: 20px;
        margin-top: -10px;
        overflow: hidden;
        color: #bfbfbf;
        line-height: 20px;
        white-space: nowrap;
        text-align: left;
        text-overflow: ellipsis;
    }
    .za-select-search__field__placeholder {
        left: 12px;
    }
    .za-select-search__field__mirror {
        position: absolute;
        top: 0;
        left: 0;
        white-space: pre;
        opacity: 0;
        pointer-events: none;
    }
    .za-select-search--inline {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .za-select-search--inline .za-select-search__field__wrap {
        width: 100%;
        height: 100%;
    }
    .za-select-search--inline .za-select-search__field {
        width: 100%;
        height: 100%;
        font-size: 100%;
        line-height: 1;
        background: transparent;
        border-width: 0;
        border-radius: 4px;
        outline: 0;
    }
    .za-select-search--inline > i {
        float: right;
    }
    .za-select-selection--multiple {
        min-height: 32px;
        padding-bottom: 3px;
        cursor: text;
        zoom: 1;
    }
    .za-select-selection--multiple::before,
    .za-select-selection--multiple::after {
        display: table;
        content: '';
    }
    .za-select-selection--multiple::after {
        clear: both;
    }
    .za-select-selection--multiple .za-select-search--inline {
        position: static;
        float: left;
        width: auto;
        max-width: 100%;
        padding: 0;
    }
    .za-select-selection--multiple
        .za-select-search--inline
        .za-select-search__field {
        width: 0.75em;
        max-width: 100%;
    }
    .za-select-selection--multiple .za-select-selection__rendered {
        height: auto;
        margin-bottom: -3px;
        margin-left: 5px;
    }
    .za-select-selection--multiple .za-select-selection__placeholder {
        margin-left: 6px;
    }
    .za-select-selection--multiple > ul > li,
    .za-select-selection--multiple .za-select-selection__rendered > ul > li {
        height: 24px;
        margin-top: 3px;
        line-height: 22px;
    }
    .za-select-selection--multiple .za-select-selection__choice {
        position: relative;
        float: left;
        max-width: 99%;
        margin-right: 4px;
        padding: 0 20px 0 10px;
        overflow: hidden;
        color: #666666;
        background-color: #ffffff;
        border: 1px solid #e8e8e8;
        border-radius: 2px;
        cursor: default;
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .za-select-selection--multiple .za-select-selection__choice__disabled {
        padding: 0 10px;
    }
    .za-select-selection--multiple .za-select-selection__choice__content {
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .za-select-selection--multiple .za-select-selection__choice__remove {
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        vertical-align: -0.125em;
        text-rendering: optimizeLegibility;
        position: absolute;
        right: 4px;
        color: rgba(0, 0, 0, 0.45);
        font-weight: bold;
        line-height: inherit;
        cursor: pointer;
        transition: all 0.3s;
        display: inline-block;
        font-size: 12px;
        font-size: 10px \9;
        transform: scale(0.83333333) rotate(0deg);
    }
    .za-select-selection--multiple .za-select-selection__choice__remove > * {
        line-height: 1;
    }
    .za-select-selection--multiple .za-select-selection__choice__remove svg {
        display: inline-block;
    }
    .za-select-selection--multiple
        .za-select-selection__choice__remove::before {
        display: none;
    }
    .za-select-selection--multiple
        .za-select-selection__choice__remove
        .za-select-selection--multiple
        .ant-select-selection__choice__remove-icon {
        display: block;
    }
    :root .za-select-selection--multiple .za-select-selection__choice__remove {
        font-size: 12px;
    }
    .za-select-selection--multiple .za-select-selection__choice__remove:hover {
        color: rgba(0, 0, 0, 0.75);
    }
    .za-select-selection--multiple .za-select-selection__clear,
    .za-select-selection--multiple .za-select-arrow {
        top: 16px;
    }
    .za-select-allow-clear
        .za-select-selection--single
        .za-select-selection-selected-value {
        padding-right: 16px;
    }
    .za-select-allow-clear
        .za-select-selection--multiple
        .za-select-selection__rendered,
    .za-select-show-arrow
        .za-select-selection--multiple
        .za-select-selection__rendered {
        margin-right: 20px;
    }
    .za-select-open .za-select-arrow-icon svg {
        transform: rotate(180deg);
    }
    .za-select-open .za-select-selection {
        border-color: #20c980;
        border-right-width: 1px !important;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(0, 188, 112, 0.2);
    }
    .za-select-combobox .za-select-arrow {
        display: none;
    }
    .za-select-combobox .za-select-search--inline {
        float: none;
        width: 100%;
        height: 100%;
    }
    .za-select-combobox .za-select-search__field__wrap {
        width: 100%;
        height: 100%;
    }
    .za-select-combobox .za-select-search__field {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        box-shadow: none;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0s;
    }
    .za-select-combobox.za-select-allow-clear
        .za-select-selection:hover
        .za-select-selection__rendered,
    .za-select-combobox.za-select-show-arrow
        .za-select-selection:hover
        .za-select-selection__rendered {
        margin-right: 20px;
    }
    .za-select-dropdown {
        margin: 0;
        padding: 0;
        color: #343434;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: 'tnum', 'tnum';
        position: absolute;
        top: -9999px;
        left: -9999px;
        z-index: 1050;
        box-sizing: border-box;
        font-size: 14px;
        font-variant: initial;
        background-color: #fff;
        border-radius: 4px;
        outline: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .za-select-dropdown.slide-up-enter.slide-up-enter-active.za-select-dropdown-placement-bottomLeft,
    .za-select-dropdown.slide-up-appear.slide-up-appear-active.za-select-dropdown-placement-bottomLeft {
        animation-name: zaSlideUpIn;
    }
    .za-select-dropdown.slide-up-enter.slide-up-enter-active.za-select-dropdown-placement-topLeft,
    .za-select-dropdown.slide-up-appear.slide-up-appear-active.za-select-dropdown-placement-topLeft {
        animation-name: zaSlideDownIn;
    }
    .za-select-dropdown.slide-up-leave.slide-up-leave-active.za-select-dropdown-placement-bottomLeft {
        animation-name: zaSlideUpOut;
    }
    .za-select-dropdown.slide-up-leave.slide-up-leave-active.za-select-dropdown-placement-topLeft {
        animation-name: zaSlideDownOut;
    }
    .za-select-dropdown-hidden {
        display: none;
    }
    .za-select-dropdown-menu {
        max-height: 250px;
        margin-bottom: 0;
        padding-left: 0;
        overflow: auto;
        list-style: none;
        outline: none;
    }
    .za-select-dropdown-menu-item-group-list {
        margin: 0;
        padding: 0;
    }
    .za-select-dropdown-menu-item-group-list > .za-select-dropdown-menu-item {
        padding-left: 20px;
    }
    .za-select-dropdown-menu-item-group-title {
        height: 32px;
        padding: 0 12px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 12px;
        line-height: 32px;
    }
    .za-select-dropdown-menu-item-group-list
        .za-select-dropdown-menu-item:first-child:not(:last-child),
    .za-select-dropdown-menu-item-group:not(:last-child)
        .za-select-dropdown-menu-item-group-list
        .za-select-dropdown-menu-item:last-child {
        border-radius: 0;
    }
    .za-select-dropdown-menu-item {
        position: relative;
        display: block;
        padding: 5px 12px;
        overflow: hidden;
        color: #343434;
        font-weight: normal;
        line-height: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    .za-select-dropdown-menu-item:hover:not(.za-select-dropdown-menu-item-disabled) {
        background-color: #e3fcee;
    }
    .za-select-dropdown-menu-item:first-child {
        border-radius: 4px 4px 0 0;
    }
    .za-select-dropdown-menu-item:last-child {
        border-radius: 0 0 4px 4px;
    }
    .za-select-dropdown-menu-item-selected {
        color: #343434;
        font-weight: 400;
        background-color: #fafafa;
    }
    .za-select-dropdown-menu-item-disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
    }
    .za-select-dropdown-menu-item-disabled:hover {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
    }
    .za-select-dropdown-menu-item-active:not(.za-select-dropdown-menu-item-disabled) {
        background-color: #e3fcee;
    }
    .za-select-dropdown-menu-item-divider {
        height: 1px;
        margin: 1px 0;
        overflow: hidden;
        line-height: 0;
        background-color: #e8e8e8;
    }
    .za-select-dropdown.za-select-dropdown--multiple
        .za-select-dropdown-menu-item {
        padding-right: 32px;
    }
    .za-select-dropdown.za-select-dropdown--multiple
        .za-select-dropdown-menu-item
        .za-select-selected-icon {
        position: absolute;
        top: 50%;
        right: 12px;
        color: transparent;
        font-weight: bold;
        font-size: 12px;
        text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;
        transform: translateY(-50%);
        transition: all 0.2s;
    }
    .za-select-dropdown.za-select-dropdown--multiple
        .za-select-dropdown-menu-item:hover
        .za-select-selected-icon {
        color: rgba(0, 0, 0, 0.87);
    }
    .za-select-dropdown.za-select-dropdown--multiple
        .za-select-dropdown-menu-item-disabled
        .za-select-selected-icon {
        display: none;
    }
    .za-select-dropdown.ant-select-dropdown--multiple
        .ant-select-dropdown-menu-item-selected
        .ant-select-selected-icon,
    .za-select-dropdown.za-select-dropdown--multiple
        .za-select-dropdown-menu-item-selected:hover
        .za-select-selected-icon {
        display: inline-block;
        color: #00bc70;
    }
    .za-select-dropdown--empty.za-select-dropdown--multiple
        .za-select-dropdown-menu-item {
        padding-right: 12px;
    }
    .za-select-dropdown-container-open .za-select-dropdown,
    .za-select-dropdown-open .za-select-dropdown {
        display: block;
    }
`;

export const Select: any = props => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container {...props} />
        </React.Fragment>
    );
};

Select.defaultProps = {
    prefixCls: 'za-select',
};

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
