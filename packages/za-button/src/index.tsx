import styled, { css } from 'styled-components';

export interface ButtonProps {
    children: any;
    theme?: any;
    disabled?: boolean;
    shape?: 'round' | 'normal';
    variant?: 'default' | 'primary' | 'warn';
}

const variant_default = css`
    background-color: var(--rb-color-white);
    border-color: var(--rb-color-gray-80);
    color: var(--rb-color-gray-40);

    &:hover:not(.rb-button--disabled) {
        background-color: var(--rb-color-primary-95);
        border-color: var(--rb-color-primary-80);
        color: var(--rb-color-primary-40);
    }

    &:focus:not(.rb-button--disabled) {
        background-color: var(--rb-color-primary-95);
        border-color: var(--rb-color-primary-70);
        color: var(--rb-color-primary-40);
        box-shadow: 0 0 0 var(--rb-focus-ring-width)
            hsla(
                var(--rb-color-primary-hue),
                var(--rb-color-primary-saturation),
                50%,
                var(--rb-focus-ring-alpha)
            );
    }

    &:active:not(.rb-button--disabled) {
        background-color: var(--rb-color-primary-95);
        border-color: var(--rb-color-primary-50);
        color: var(--rb-color-primary-30);
    }
`;

const variant: any = ({ variant }) => {
    const variant_primary = css`
        background-color: var(--rb-color-primary-50);
        border-color: var(--rb-color-primary-50);
        color: var(--rb-color-primary-text);

        &:hover:not(.rb-button--disabled) {
            background-color: var(--rb-color-primary-60);
            border-color: var(--rb-color-primary-60);
            color: var(--rb-color-primary-text);
        }

        &:focus:not(.rb-button--disabled) {
            background-color: var(--rb-color-primary-60);
            border-color: var(--rb-color-primary-60);
            color: var(--rb-color-primary-text);
            box-shadow: 0 0 0 var(--rb-focus-ring-width)
                hsla(
                    var(--rb-color-primary-hue),
                    var(--rb-color-primary-saturation),
                    50%,
                    var(--rb-focus-ring-alpha)
                );
        }

        &:active:not(.rb-button--disabled) {
            background-color: var(--rb-color-primary-50);
            border-color: var(--rb-color-primary-50);
            color: var(--rb-color-primary-text);
        }
    `;

    switch (variant) {
        case 'primary':
            return variant_primary;
        case 'success':
            return variant_primary;
        case 'info':
            return variant_primary;
        case 'warning':
            return variant_primary;
        case 'danger':
            return variant_primary;
        case 'defalut':
        default:
            return variant_default;
    }
};

const shape: any = ({ shape }) => {
    const shape_round = css`
        border-radius: 1000px;
    `;

    const shape_normal = css`
        border-radius: 4px;
    `;

    switch (shape) {
        case 'round':
            return shape_round;
        case 'normal':
        default:
            return shape_normal;
    }
};

const Container = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: stretch;
    justify-content: center;

    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    cursor: inherit;

    padding: 4px 12px;
    line-height: 1.5;

    border-style: solid;
    border-width: 1px;

    color: #fff;
    font-weight: 400;

    &::-moz-focus-inner {
        border: 0;
    }

    &:focus {
        outline: none;
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${variant}

    ${shape}
`;

Container.defaultProps = {
    variant: 'default',
};

export default Container;
