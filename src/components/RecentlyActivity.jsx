import React from 'react'
import styled from 'styled-components'
import { mobile, table } from '../media/queries'

const MyAside = styled.aside`
    ${mobile}{
        max-width: 603.97px;
        min-width: 305.56px;
    }
`

const MyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 78.90855457227139%; /*535 / 678*/
    height: 80%;
    margin: 0 auto;
    padding-left: 4.48598130841121%;  /* 24 /  535*/
    padding-right: 11.77570093457944%;  /* 63 /  535*/
    background-color: ${({ theme }) => theme.asideBgColor};
    border: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    ${table}{
        margin: 0;
    }

    ${mobile}{
        max-width: 100%;
        padding-right: 16.77570093457944%;
    }
`

const MyH2Container = styled(MyContainer)`
    height: 20%;
    padding-top: 0;
    padding-bottom: 0;
    background-color: ${({ theme }) => theme.asideBgTop};
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    & h2{
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #fff;
    }
`

const MySectionTop = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 200;

    & *{
        margin: 0;
    }

    & h3{
        margin: 15px 0;
        ${table}{
            margin: 0;
        }
    }

    & p:nth-child(1) {
        margin-bottom: 30px;
    }

    & p:nth-child(3) {
        margin-top: 20px;
    }
`

const MySectionBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    color: #fff;
    font-weight: 200;

    ${table}{
        flex-direction: column;
    }

    & p{
        ${table}{
            margin-top: 0;
        }
    }
`

const MyButton = styled.button`
    width: max-content;
    height: 80% ;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #FF5151;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    word-spacing: 3px;
    user-select: none;
    
    &:hover{
        background-color: #FF515190;
        cursor: pointer;
    }

    ${table}{
        padding: .5rem 17px;
        min-width: max-content;
    }
`

const RecentlyActivity = () => {
    return (
        <MyAside>
            <MyH2Container>
                <h2>RecentlyActivity</h2>
            </MyH2Container>
            <MyContainer>
                <MySectionTop>
                    <p>10.40 AM, Fri 10 Sept 2021</p>
                    <h3>You Posted a New Job</h3>
                    <p>Kindly check the requirements and terms of work and make sure everything is right.</p>
                </MySectionTop>
                <MySectionBottom>
                    <p>Today you makes 12 Activity</p>
                    <MyButton>See All Activity</MyButton>
                </MySectionBottom>
            </MyContainer>
        </MyAside>
    );
}

export default RecentlyActivity