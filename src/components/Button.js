import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    color : red;
    &:hover{
        background: var(--lightBlue);
        color : var(--mainBlue);
    }

`;