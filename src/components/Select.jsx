import React from 'react'
import styled from 'styled-components'
import { mobile } from '../media/queries'

const MySelect = styled.select`
    padding: .5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.H5ColorPrimary};
    background-color: ${({ theme }) => theme.bgSelect} ;

    &:focus{
        outline: none;
    }

    ${mobile}{
        width: 50%;
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