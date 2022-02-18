import React from 'react'
import styled from 'styled-components'
import ButtonBottom from './ButtonBottom'
import CardAnnouncement from './CardAnnouncement'
import Select from './Select'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'

const MyAnnouncement = styled.section`
    height: 440px;
    border: 1px #e0e0e0 solid; 
    border-radius: 10px;
`

const MyCardContainer = styled.div`
    width: 94.93670886075949%; /*675 / 711*/ 
    height: 75%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;

    &::-webkit-scrollbar{
        background-color: transparent;
        color: #444;
    }
`

const MyContentContainer = styled.div`
    width: 94.93670886075949%; /*675 / 711*/
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    & h3{
        color: ${({ theme }) => theme.H1ColorPrimary};
        font-weight: 600;
        font-size: 1.25rem;
    }
`

const Announcement = () => {
    return (
        <MyAnnouncement>
            <MyContentContainer>
                <h3>Announcement</h3>
                <Select />
            </MyContentContainer>
            <MyCardContainer>
                <CardAnnouncement styles={{ transform: 'rotate(40deg)', cursor: "pointer" }} icon={faThumbTack} title="Outing schedule for every departement" description="5 Minutes ago" />
                <CardAnnouncement styles={{ transform: 'rotate(40deg)', cursor: "pointer" }} icon={faThumbTack} title="Meeting HR Department" description="Yesterday, 12:30 PM" />
                <CardAnnouncement styles={{ transform: 'rotate(40deg)', cursor: "pointer" }} icon={faThumbTack} title="IT Department need two more talents for UX/UI Designer position" description="Yesterday, 09:15 AM" />
                <CardAnnouncement styles={{ transform: 'rotate(40deg)', cursor: "pointer" }} icon={faThumbTack} title="IT Department need two more talents for UX/UI Designer position" description="Yesterday, 09:15 AM" />
                <CardAnnouncement styles={{ transform: 'rotate(40deg)', cursor: "pointer" }} icon={faThumbTack} title="IT Department need two more talents for UX/UI Designer position" description="Yesterday, 09:15 AM" />
                <CardAnnouncement styles={{ transform: 'rotate(40deg)', cursor: "pointer" }} icon={faThumbTack} title="IT Department need two more talents for UX/UI Designer position" description="Yesterday, 09:15 AM" />
            </MyCardContainer>
            <ButtonBottom title="See All Announcement" />
        </MyAnnouncement>
    )
}

export default Announcement;