import React from 'react';
import { TransferStyle } from './style';

const ListHeader = () => {
    return (
        <div className="transfer-list-header">
            <label className="checkbox-wrapper">
                <span className="checkbox">
                    <input
                        type="checkbox"
                        className="checkbox-input"
                        value=""
                    />
                    <span className="checkbox-inner"></span>
                </span>
            </label>
            <span className="transfer-list-header-title">源列表</span>
            <span className="transfer-list-header-selected">0/14</span>
        </div>
    );
};

const ListBody = () => {
    return (
        <>
            <ul className="transfer-list-content">
                <li className="transfer-list-content-item transfer-list-content-item-disabled">
                    <span className="transfer-list-content-item-text">
                        <label className="checkbox-wrapper">
                            <span className="checkbox checkbox-disabled">
                                <input
                                    type="checkbox"
                                    className="checkbox-input"
                                    value=""
                                />
                                <span className="checkbox-inner"></span>
                            </span>
                        </label>
                        <span>content1</span>
                    </span>
                </li>
                <li className="transfer-list-content-item transfer-list-content-item-disabled">
                    <span className="transfer-list-content-item-text">
                        <label className="checkbox-wrapper">
                            <span className="checkbox checkbox-disabled">
                                <input
                                    type="checkbox"
                                    className="checkbox-input"
                                    value=""
                                />
                                <span className="checkbox-inner"></span>
                            </span>
                        </label>
                        <span>content1</span>
                    </span>
                </li>
            </ul>
            <div className="transfer-list-body-not-found">
                暂无相关信息
            </div>
        </>
    );
};

const List = () => {
    return (
        <div className="transfer-list">
            <ListHeader />
            <ListBody />
        </div>
    );
};

export const Transfer = props => {
    const { ...other } = props;

    return (
        <TransferStyle>
            <List />
            <div className="transfer-operation">
                <button
                    type="button"
                    className="btn btn-primary btn-sm btn-icon-only"
                >
                    <i className="fishdicon fishdicon-right"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-sm btn-icon-only"
                >
                    <i className="fishdicon fishdicon-left"></i>
                </button>
            </div>
            <List />
        </TransferStyle>
    );
};

Transfer.defaultProps = {};

export default Transfer;
