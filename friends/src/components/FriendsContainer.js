import React from 'react';

const FriendsContainer = (props) => {
	return (
		<div className="friends-wrapper">
			<h1>List of friends</h1>
			{props.friends.map((friend) => {
				return (
					<div className="friend-container" key={friend.id}>
						<h4>Name: {friend.name}</h4>
						<p>Age: {friend.age}</p>
						<p>Email: {friend.email}</p>
						<button
							className="update"
							onClick={(e) => {
								props.updateInfo(e, friend.id, friend.name, friend.age, friend.email);
							}}
						>
							Update
						</button>
						<button
							className="delete"
							onClick={(e) => {
								props.deleteFriend(e, friend.id);
							}}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default FriendsContainer;
