import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';

export interface RowProps {
    gutter: number[] | number;
    align: 'top' | 'middle' | 'bottom';
    justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

const RowStyle = styled.div`
    display: flex;
    position: relative;
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
`;

const Row = props => {
    const { children, ...reset } = props;
    const calcGutter = 16 / 2;

    const cols = Children.map(
        children,
        (col: React.ReactElement<HTMLDivElement>) => {
            if (!col) {
                return null;
            }

            if (col.props && calcGutter > 0) {
                return cloneElement(col, {
                    style: {
                        paddingLeft: calcGutter / 2,
                        paddingRight: calcGutter / 2,
                        ...col.props.style,
                    },
                });
            }

            return col;
        }
    );

    return <RowStyle {...reset}>{cols}</RowStyle>;
};

Row.defaultProps = {
    className: 'za-row',
};

export default Row;
