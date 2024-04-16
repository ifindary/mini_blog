import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: calc(100% - 32px);
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextSmallInput(props){
    const { value, onChange } = props;

    return <StyledInput value={value} onChange={onChange} />;
}

export default TextSmallInput;