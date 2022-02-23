import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faMessage, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import OpenMenu from './OpenMenu';
import MySwitch from './MySwitch';
import { mobile, table } from '../media/queries';
import useWidth from '../hooks/useWidth';


const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px #f1f1f1 solid;
    padding-top: 14px;
    padding-bottom: 14px;
`

const MyBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ divWidth }) => divWidth} ;

    ${table}{
        width: 45%;
        margin-left: .6rem;
    }

    ${mobile}{
        width: 20%;
        margin-left: 1rem;
    }
`
const MyCustomBox = styled(MyBox)`
    justify-content: space-around;

    ${table}{
        width: 30%;
    }

    ${mobile}{
        width: 40%;
        justify-content: space-between;
    }
`

const MyButtonContainer = styled.div`
    width: 71.45833333333333%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    border:  ${({ theme }) => theme.borderPrimary};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bgColorSecondary};

    ${mobile}{
        background-color: transparent;
        border:  none;
        width: 20%;
        padding: 0;
    }
`

const MyInput = styled.input`
    width: 90%;
    background-color: transparent;
    border: none;
    color: #b2b2b2;
    
    &:focus{
        outline: none;
    }

    ${mobile}{
        display: none;
    }
`

const MyButton = styled.button`
    background-color: transparent;
    border: none;
    color: #b2b2b2;

    ${mobile}{
        font-size: 20px;
        padding: 0;
    }
`

const Header = ({ theme, setTheme, setOpen, open }) => {
    const width = useWidth();

    return (
        <MyHeader>
            <MyBox divWidth="33.31020124913255%">
                {width > 1096 && <OpenMenu setOpen={setOpen} open={open} icon={faAngleRight} />}
                {width <= 675 && <OpenMenu setOpen={setOpen} open={open} icon={faAngleRight} />}
                <MyButtonContainer>
                    <MyInput type="text" placeholder="Search" />
                    <MyButton >
                        <FontAwesomeIcon icon={faSearch} />
                    </MyButton>
                </MyButtonContainer>
            </MyBox>

            <MyCustomBox divWidth="15.8383067314365%">
                <FontAwesomeIcon style={{ cursor: "pointer" }} color="#b2b2b2" icon={faBell} />
                <FontAwesomeIcon style={{ cursor: "pointer" }} color="#b2b2b2" icon={faMessage} />
                <MySwitch theme={theme} setTheme={setTheme} />
            </MyCustomBox>
        </MyHeader>
    );
}

export default Header;
