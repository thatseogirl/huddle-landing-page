import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 2.5em  0;

    h1{
        color: red;
        &:hover{
        background-color: blue;
    }
    }

   
`