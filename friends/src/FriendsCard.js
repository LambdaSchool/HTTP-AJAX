import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class FriendsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavLink to={`/friends/${this.props.friend.id}`} className="FriendsCard">
        <div>{this.props.friend.name}</div>
        <div>{this.props.friend.age}</div>
        <div>{this.props.friend.email}</div>
      </NavLink>
    );
  };
}

export default FriendsCard;
