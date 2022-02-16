import React from 'react'
import styled from 'styled-components'
import CardAnnouncement from './CardAnnouncement'

const MyAnnouncement = styled.section`
    width: 51.18790496760259%;
    display: inline-block;
    border: 1px #e0e0e0 solid; 
    border-radius: 10px;
    margin-top: 15px;
`

const MyCardContainer = styled.div`
    width: 94.93670886075949%; /*675 / 711*/ 
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const MyContentContainer = styled.div`
    width: 94.93670886075949%; /*675 / 711*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    & select {
        color: ${({ theme }) => theme.H5ColorPrimary};
        background-color: red ; /*Desanidar */
    }
`



const Announcement = () => {
    return (
        <MyAnnouncement>
            <MyContentContainer>
                <h3>Announcement</h3>
                <select name="" id="">
                    <option selected>Today, 13 Sep 2021</option>
                    <option>Today, 14 Sep 2021</option>
                </select>
            </MyContentContainer>
            <MyCardContainer>
                <CardAnnouncement title="Outing schedule for every departement" description="5 Minutes ago" />
                <CardAnnouncement title="Meeting HR Department" description="Yesterday, 12:30 PM" />
                <CardAnnouncement title="IT Department need two more talents for UX/UI Designer position" description="Yesterday, 09:15 AM" />
            </MyCardContainer>
        </MyAnnouncement>
    )
}

export default Announcement;