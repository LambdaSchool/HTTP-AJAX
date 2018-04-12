import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      email: ""
    };
  }
  // handles new input in the update form
  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // update a friend's data on a server
  updateFriend = id => {
    const friend = {};
    // check if there is anything to update
    if (this.state.age !== "") {
      friend.age = this.state.age;
    }
    if (this.state.email !== "") {
      friend.email = this.state.email;
    }
    // put request by friend id
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      // .then(response => {
      //   console.log(response);
      // })
      .then(response => {
        this.props.getFriendList();
      })
      .catch(err => {
        console.error(err);
      });
    // update state
    this.setState({ age: "", email: "" });
  };
  // delete friend's data from the server
  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.props.getFriendList();
      })
      .catch(err => {
        console.log(err);
      });
  };
  // render data for each friend
  render() {
    return [
      <div>
        <Link to={`/friend/${this.props.friend.id}`}>
          {this.props.friend.name}
        </Link>
      </div>,
      <div>{this.props.friend.age}</div>,
      <div>{this.props.friend.email}</div>,
      <form>
        <input
          name="age"
          value={this.state.age}
          placeholder="Age"
          onChange={this.handleNewInput}
        />
        <input
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleNewInput}
        />
        {/* Save updates to a friend */}
        <button onClick={() => this.updateFriend(this.props.friend.id)}>
          Save Changes
        </button>
        <button onClick={() => this.deleteFriend(this.props.friend.id)}>
          Delete Friend
        </button>
      </form>
    ];
  }
}
