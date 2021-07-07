import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendsList = props => {

	if (props.friends < 1) return <h2>Loading...</h2>;
		else {

		return (
			<div>
				{props.friends.map(f => {
					return (
            <div>
              <Friend
								key={f.id} 
								id={f.id} 
								name={f.name}
								age={f.age}
								email={f.email}/>

              <Link to='/'><button id={f.id} onClick={props.deleteFriend}>Delete</button></Link>
              <Link to='/updatefriend'><button id={f.id} onClick={props.update}>Update</button></Link>
            </div>
					)
				})}
			</div>
		);
	}
};

export default FriendsList;