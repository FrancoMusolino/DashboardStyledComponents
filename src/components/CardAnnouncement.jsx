import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { mobile } from '../media/queries';

const MyCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.bgColorSecondary};
    border: ${({ theme }) => theme.borderPrimary};
    border-radius: 10px;
`

const MyContainerIcon = styled.div`
    display: flex;
    justify-content: space-around;
    width: 10%;

    ${mobile}{
        width: 20%;
    }
`

const MyContentContainer = styled.div`
    width: 75%;
`

const MyH5 = styled.h5`
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.H5ColorPrimary};

    ${mobile}{
        font-size: .9rem;
    }
    
`

const MyP = styled.p`
    margin-bottom: 0;
    font-size: 0.625rem;
    font-weight: 400;
    color: #686868;
`

const CardAnnouncement = ({ title, description, icon, styles }) => {
    return (
        <MyCardContainer>
            <MyContentContainer>
                <MyH5>{title}</MyH5>
                <MyP>{description}</MyP>
            </MyContentContainer>

            <MyContainerIcon>
                <FontAwesomeIcon style={styles} color="#686868" icon={icon} />
                <FontAwesomeIcon style={{ cursor: "pointer" }} color="#b2b2b2" icon={faEllipsis} />
            </MyContainerIcon>
        </MyCardContainer>
    )
}

export default CardAnnouncement;