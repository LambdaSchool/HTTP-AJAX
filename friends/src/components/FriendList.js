import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Section = styled.section`
	border: 1px solid #f1f7ed;
	border-radius: 5px;
	width: 35%;
	padding: 5%;
	margin: 1%;
	background: #9e90a2;
`;
const H1 = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	color: #f1f7ed;
	font-family: cursive;
	margin-bottom: 5%;
	text-align: center;
`;
const H2 = styled.h2`
	font-size: 1.2rem;
	color: #272932;
	margin: 5% 0;
	font-weight: bold;
	text-align: center;
`;

const Button = styled.button`
	border: 1px solid #f1f7ed;
	border-radius: 50%;
	width: 20px;
	background: #272932;
	color: #f1f7ed;
	border: none;
`;
class FriendList extends Component {

	deleteFriend = (event) => {
		event.preventDefault();
		this.props.deleteFriend(event.target.name);
	};
	render() {
		return (
			<React.Fragment>
					{this.props.data.map((friend, index) => (
						<Section key={index}>
							<Button
								name={friend.id}
								onClick={this.deleteFriend}
								type="submit"
							>
								x
							</Button>
							<H1>{friend.name}</H1>
							<H2>Age: {friend.age}</H2>
							<H2>Email: {friend.email}</H2>
							<Link to={`/${friend.id}`} >
								<H1>Update</H1>
							</Link>
						</Section>
					))
					}
			</React.Fragment>
		);
	}
}

export default FriendList;

FriendList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			age: PropTypes.number,
			email: PropTypes.string
		})
	),
	deleteFriend: PropTypes.func
};
