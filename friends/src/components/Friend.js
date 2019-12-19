import React from 'react';

function Friend(props) {
    return (
        <div className='friend-wrapper'>
            <div className='friend-info friend-name'>Name: {props.friend.name}</div>
            <div className='friend-info friend-age'>Age: {props.friend.age}</div>
            <div className='friend-info friend-email'>Email: {props.friend.email}</div>
            <div className='friend-info'>Phone: {props.friend.phone} </div>
            <div className='friend-info'>Notes: {props.friend.notes} </div>
            <button onClick={()=>props.update(props.friend.id)}>Update</button>
        </div>
    )
}

export default Friend;