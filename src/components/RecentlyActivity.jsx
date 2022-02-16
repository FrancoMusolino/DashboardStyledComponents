import React from 'react'
import styled from 'styled-components'

const MyAside = styled.aside`
    position: absolute;
    width: 48.81209503239741%; /*678 / 13890*/
    display: inline-block;
`

const MyContainer = styled.div`
    width: 92.18289085545723%; /*625 / 678*/
    height: 400px;
    margin: 0 auto;
    /* padding: 1rem; */
    padding-left: 1.5rem; 
    background-color: ${({ theme }) => theme.asideBgColor};
    border: 10px;
`

const MyH2Container = styled(MyContainer)`
    height: auto;
    background-color: ${({ theme }) => theme.asideBgTop};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    & h2{
        margin: 0;
    }
`

const RecentlyActivity = () => {
    return (
        <MyAside>
            <MyH2Container>
                <h2>RecentlyActivity</h2>
            </MyH2Container>
            <MyContainer>
                Hola
            </MyContainer>
        </MyAside>
    );
}

export default RecentlyActivity