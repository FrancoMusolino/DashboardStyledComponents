import styled from 'styled-components';
import React from 'react'
import Chart1 from '../img/Chart1.svg'
import Chart2 from '../img/Chart2.svg'

const MyBox = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 21px;
    column-gap: 15px;
`

const MyCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    grid-column: span 2;
    background-color:  ${({ bgColor }) => bgColor};
    border-radius: 8px;

    & h3{
        margin: 0;
        font-weight: 600;
        font-size: 1.25rem;
        color: #161E54;
    }

    & h2{
        font-size: 1.75rem;
        margin: 15px 0;
        color: #161E54 ;
        font-weight: 600;
    }
`

const MyP = styled.div`
    margin: 0;
    font-size: 1rem;
    color: ${({ textColor }) => textColor};
`

const MyCardBottom = styled(MyCard)`
    flex-direction: row;
    grid-column: span 3;
    background-color: ${({ theme }) => theme.bgColorSecondary};
    border:  ${({ theme }) => theme.borderPrimary};

    & h3 {
        color: ${({ theme }) => theme.H1ColorPrimary};
        font-weight: 500;
    }

    & h2{
        color: ${({ theme }) => theme.H1ColorPrimary};
        font-weight: 500;
    }

`

const MyPBottom = styled(MyP)`
    color: ${({ theme }) => theme.pColorPrimary};
    margin-bottom: 7px;
`



const Dashboard = () => {
    return (
        <MyBox>
            <MyCard bgColor="#f3ceac">
                <h3>Available Position</h3>
                <h2>24</h2>
                <MyP textColor="#FF5151" >4 Urgently needed</MyP>
            </MyCard>
            <MyCard bgColor="#E8F0FB">
                <h3>Job Open</h3>
                <h2>10</h2>
                <MyP textColor="#3786F1" >4 Active hiring</MyP>
            </MyCard>
            <MyCard bgColor="#f3ace7">
                <h3>New Employees</h3>
                <h2>24</h2>
                <MyP textColor="#FA01C3" >4 Department</MyP>
            </MyCard>
            <MyCardBottom>
                <div>
                    <h3>Total Employees</h3>
                    <h2>216</h2>
                    <MyPBottom >120 Men</MyPBottom>
                    <MyPBottom >96 Women</MyPBottom>
                </div>
                <div>
                    <img src={Chart2} />
                </div>
            </MyCardBottom>
            <MyCardBottom>
                <div>
                    <h3>Talent Request</h3>
                    <h2>16</h2>
                    <MyPBottom >6 Men</MyPBottom>
                    <MyPBottom >10 Women</MyPBottom>
                </div>
                <div>
                    <img src={Chart1} />
                </div>
            </MyCardBottom>
        </MyBox>
    );
}

export default Dashboard