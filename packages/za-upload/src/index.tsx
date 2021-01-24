import React, { useRef } from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Upload = props => {
    const { onChange, children, ...other } = props;

    const ref: any = useRef();

    const onFileChange = () => {
        const { files } = ref.current;

        if (files && files.length > 0 && files[0].size > 0) {
            var file = files[0];
            var reader = new FileReader();

            reader.onloadend = function (evt: any) {
                console.log(evt);
                if (evt.target.readyState == FileReader.DONE) {
                    const result = evt.target.result;

                    onChange && onChange(result);
                }
            };

            reader.readAsText(file);
        }
    };

    const onUpdateButton = () => {
        ref.current.click();
    };

    return (
        <Root {...other} onClick={onUpdateButton}>
            <input
                type="file"
                ref={ref}
                style={{ display: 'none' }}
                onChange={onFileChange}
            />
            {children}
        </Root>
    );
};

Upload.defaultProps = {};

export default Upload;
