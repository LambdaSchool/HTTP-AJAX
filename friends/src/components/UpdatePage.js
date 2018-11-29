import React, { Component } from 'react';
import styled from 'styled-components';
import Friend from './Friend'
import FriendForm from './FriendForm'

const Main = styled.main`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
border-radius: 10px;
width: 80%;
padding: 1%;
margin: 1% 4%;
background: #bea8aa;
`;

const H1 = styled.h1`
font-size: 3rem;
color: ${(props) => props.top ? '#F1F7ED ': '#272932'  };
font-family: cursive;
margin: 5% 0;
`

const UpdatePage = (props) => {
    return (

        <React.Fragment>
    <H1 top>Current Friend</H1>
    <Main>
    <Friend friends={props.friends}
    match={props.match} />
    <H1>Update Details</H1>
    <FriendForm
        updateFriend={props.updateFriend}
        type='Update'
        
    />
    </Main>
    </React.Fragment>
    )
}

export default UpdatePage