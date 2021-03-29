import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const sizeMap = {
    xsmall: 1.125,
    small: 1.25,
    medium: 2.75,
    large: 3,
    xlarge: 3.5,
};

export interface AvatarProps {
    theme?: any;
    contain?: boolean;
    interactive?: boolean;
    square?: boolean;
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
    background: #fff;
    color: rgba(0, 0, 0, 0.38);

    font-size: ${({ size }) => size && sizeMap[size] + 'rem'};
    border-radius: ${({ square }) => (square ? '.1875rem' : '50%')};
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

const AvatarText = styled.div`
    width: 1em;
    min-width: 1em;
    max-width: 1em;
    height: 1em;
    max-height: 1em;
    min-height: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: inherit;
    user-select: none;
    transition: opacity 0.2s;
    opacity: 0;
`;

const AvatarTextInner = styled.div`
    font-size: 0.5em;
    font-weight: 700;
`;

export const Avatar: FC<AvatarProps> = props => {
    const { src, contain, square, size, name, ...other } = props;

    return (
        <AvatarRoot square={square} size={size} {...other}>
            <Image src={src} contain={contain}></Image>
            <AvatarText>
                <AvatarTextInner>{name}</AvatarTextInner>
            </AvatarText>
        </AvatarRoot>
    );
};

Avatar.defaultProps = { size: 'medium' };

export default Avatar;
