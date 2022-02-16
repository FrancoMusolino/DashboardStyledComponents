import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

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
`

const OpenMenu = () => {
    const [open, setOpen] = useState(false);

    const menuIconCliclk = () => {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <>
            <MyBox onClick={menuIconCliclk}>
                {
                    open ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />
                }
            </MyBox>
        </>
    );
}

export default OpenMenu;