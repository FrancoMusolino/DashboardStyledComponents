import React from 'react';
import styled from 'styled-components';

const MyButtonContainer = styled.div`
    max-width: 100%;
    height: 5%;
    padding: .7rem;
    background-color: #fff;
    overflow: hidden;
    border: ${({ theme }) => theme.borderPrimary} ;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    & h4{
        margin: 0;
        text-align: center;
        color: #FF5151;
        cursor: pointer;
    }
`

const ButtonBottom = ({ title }) => {
    return (
        <MyButtonContainer>
            <h4>{title}</h4>
        </MyButtonContainer>
    )
}

export default ButtonBottom;