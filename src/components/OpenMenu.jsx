import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <MyBox onClick={handleOpen}>
                <FontAwesomeIcon icon={icon} />
            </MyBox>
        </>
    );
}

export default OpenMenu;