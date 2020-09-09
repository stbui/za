import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const sizeMap = {
    xsmall: 1.125,
    small: 1.25,
    medium: 1.5,
    large: 2.25,
    xlarge: 3,
};

export interface AvatarProps {
    theme?: any;
    contain?: false | true;
    interactive?: false | true;
    square?: false | true;
    name?: string;
    size?: string;
    src?: string;
}

export const AvatarRoot: any = styled.span<AvatarProps>`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 1.5rem;
    font-family: inherit;
    border-radius: 50%;
    background: #fff;
    color: rgba(0, 0, 0, 0.38);

    font-size: ${({ size }) => size && sizeMap[size]};
`;

const Image: any = styled.div<AvatarProps>`
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background: transparent none no-repeat 50% / cover;
    opacity: 0;
    transition: opacity 0.2s;
    position: absolute;
    opacity: 1;
    font-size: 1em;

    background-image: ${({ src }) => src && css`url(${src})`};
    background-size: ${({ contain }) => (contain ? 'contain' : 'cover')};
`;

export const Avatar: FC<AvatarProps> = props => {
    const { src, contain, square, size, ...other } = props;

    return (
        <AvatarRoot square={square} size={size} {...other}>
            <Image src={src} contain={contain}></Image>
            {/* <div>{name}</div> */}
        </AvatarRoot>
    );
};

export default Avatar;
