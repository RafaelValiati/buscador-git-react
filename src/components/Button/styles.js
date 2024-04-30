import styled from "styled-components"

export const ButtonContainer = styled.button`

    border: 1px solid #FAFAFA;
    background-color: #FAFAFA;
    border-radius:20px;

    height: 62px;
    width: 80%;

    margin:20px;

    input {
        background: transparent;
        border: 0;
        width: auto;
        height: 62px;
        padding: 0 20px;
        color: #FFF;
        font-size: 20px;
    }

    &:hover {
        background-color: #FAFAFA40;
        cursor:pointer;
    }

`