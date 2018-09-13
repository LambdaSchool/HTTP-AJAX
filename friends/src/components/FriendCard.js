import React from "react";
import PropTypes from "prop-types";
import "./FriendCard.css";

const FriendCard = props => {
  return (
    <div className="friend-card">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email} </p>
    </div>
  );
};

FriendCard.propTypes = {
  //fill out prop types
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  })
};
export default FriendCard;
