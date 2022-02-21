import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { table } from '../media/queries';

const MyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px #b2b2b2 solid;
    color: #FF5151;
    cursor: pointer;

    transition: transform .25s linear;

    ${table}{
        ${(props) => props.isOpen && css`
        transform: rotate(180deg);
    `}
    }
`

const OpenMenu = ({ icon, open, setOpen }) => {
    const handleOpen = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true)
        }
    }

    return (
        <>
            <MyBox isOpen={open ? true : false} onClick={handleOpen}>
                <FontAwesomeIcon icon={icon} />
            </MyBox>
        </>
    );
}

export default OpenMenu;