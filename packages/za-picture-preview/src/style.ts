import styled, { css } from 'styled-components';

export const PicturePreviewStyle = styled.div`
    position: absolute;
    z-index: 1000;
    user-select: none;
    touch-action: none;
    border-radius: 4px;
    background: #5c5f66;
    box-shadow: 0 2px 6px 0 rgb(23 23 26 / 10%);
    overflow: hidden;

    /*  */
    width: 1024px;
    height: 445px;
    left: 297px;
    top: 183px;

    .picture-preview-img {
        vertical-align: middle;
        border-style: none;

        display: none;
        transition: none;

        margin-left: 0px;
        margin-top: 0px;
        width: 1024px;
        height: 445px;

        &.show {
            display: block;
            transition: all 0.3s ease-out;
            border-radius: 4px;
        }
    }

    .picture-preview-close {
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
        height: 32px;
        width: 32px;
        border-radius: 0 0 0 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #fff;
    }

    .picture-preview-prev {
        left: 0;
        margin-left: 20px;
        position: absolute;
        display: none;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        width: 32px;
        height: 32px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #fff;
    }

    .picture-preview-next {
        right: 0;
        margin-right: 20px;
        position: absolute;
        display: none;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        width: 32px;
        height: 32px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #fff;
    }

    .picture-preview-toolbar {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        width: 248px;
        display: block;
        color: #fff;
        font-size: 20px;

        &-title {
            font-size: 12px;
            line-height: 1;
            height: 20px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            opacity: 0.5;
            color: #ccc;
            text-align: center;
        }
    }

    /* ${({ theme, show }) => css`
        display: none;
    `} */
`;
