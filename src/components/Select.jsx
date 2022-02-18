import React from 'react'
import styled from 'styled-components'

const MySelect = styled.select`
    padding: .5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.H5ColorPrimary};
    background-color: ${({ theme }) => theme.bgSelect} ;

    &:focus{
        outline: none;
    }
`

const Select = () => {
    return (
        <MySelect name="" id="">
            <option selected>Today, 13 Sep 2021</option>
            <option>Today, 14 Sep 2021</option>
        </MySelect>
    )
}

export default Select