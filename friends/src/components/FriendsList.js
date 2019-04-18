import React from 'react';
import { Link } from 'react-router-dom';

function FriendsList(props) {
    // if(props.friendsArray.length === 0) {
    //     return <h4>...loading</h4>;
    // }
return (
    <div>
        {props.friendsArray.map(friend => (
            <Link to={`/friends-list/${friend.id}`} key={friend.id}>
            
            </Link>
        ))}


    <h1>friendsList</h1>
    <button className="friendButton">Add Friend</button>
    </div>
    )
}

export default FriendsList;