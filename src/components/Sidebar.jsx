import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import OpenMenu from './OpenMenu';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Vector1 from '../img/Vector1.svg'
import Vector2 from '../img/Vector2.svg'
import Vector3 from '../img/Vector3.svg'
import Vector4 from '../img/Vector4.svg'
import Vector5 from '../img/Vector5.svg'
import Vector6 from '../img/Vector6.svg'
import Vector7 from '../img/Vector7.svg'
import { mobile, table } from '../media/queries'
import useWidth from '../hooks/useWidth';

const MyNav = styled.div`
    position: fixed;
    z-index: 10;
    width: 15vw;
    transform: translateX(-15vw);
    height: 100vh;
    /* From https://css.glass */
    /* From https://css.glass */
    background: ${({ theme }) => theme.bgSidebar};
    box-shadow: ${({ theme }) => theme.boxShadow};
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    transition: transform .25s ease-in;

    ${(props) => props.isOpen && css`
        transform: translateX(0);
    `}

    ${table}{
        width: 10.79136690647482%;
        padding-top: 10px;
    }

    ${mobile}{
        width: 40vw;
        transform: translateX(-40vw);

        ${(props) => props.isOpen && css`
        transform: translateX(0);
    `}
    }
`

const MyTitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${mobile}{
        flex-direction: column;
        justify-content: center;
    }
`

const MyH2 = styled.h2`
    font-size: 38px;
    color: ${({ theme }) => theme.H5ColorPrimary};
    line-height: 30px;
    text-align: center;
    ${table}{
        font-size: 18px;
        
    }
`
const MyFirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;

    & h4{
        color: #686868;
        font-size: 15px;
        ${table}{
                text-align: center;
                
            }
    }

    & div{
        display: flex;
        align-items: center;
        height: 7vh;
        color: ${({ theme }) => theme.H5ColorPrimary};
        ${table}{
                margin: 5px;
                
            }
        & p{
            line-height: 20px;
            margin: 0;
            margin-left: 20px;
            cursor: pointer;

            ${table}{
                display: none;
                
            }
        }
        & img{
            ${table}{
                margin: auto;
                
            }
        }
    }
`

const MySecondContainer = styled(MyFirstContainer)`
    & div{
        height: 7vh;
    }
`

const Sidebar = ({ setOpen, open }) => {
    const width = useWidth();

    return (
        <MyNav isOpen={open ? true : false}>
            <MyTitleContainer>
                <MyH2>WeHR</MyH2>
                {width > 1096 && <OpenMenu setOpen={setOpen} open={open} icon={faAngleLeft} />}
                {width <= 675 && <OpenMenu setOpen={setOpen} open={open} icon={faAngleLeft} />}
            </MyTitleContainer>
            <MyFirstContainer>
                <h4>MAIN MENU</h4>
                <div>
                    <img src={Vector1} alt="" />
                    <p style={{ color: "#FF5151" }}>Dashboard</p>
                </div>
                <div>
                    <img src={Vector2} alt="" />
                    <p>Recruitment</p>
                </div>
                <div>
                    <img src={Vector3} alt="" />
                    <p>Schedule</p>
                </div>
                <div>
                    <img src={Vector4} alt="" />
                    <p>Employee</p>
                </div>
                <div>
                    <img src={Vector5} alt="" />
                    <p>Department</p>
                </div>
            </MyFirstContainer>
            <MySecondContainer>
                <h4>OTHER</h4>
                <div>
                    <img src={Vector6} alt="" />
                    <p>Support</p>
                </div>
                <div>
                    <img src={Vector7} alt="" />
                    <p>Settings</p>
                </div>
            </MySecondContainer>
        </MyNav>
    );
}

export default Sidebar