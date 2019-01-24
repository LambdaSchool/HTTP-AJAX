import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { FriendsList } from "./Components/FriendsList";

import { Col, Button, Form, Input } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      
        name: "h",
        age: "",
        email: ""
      
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    event.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  // selectFriend = friend => {
  //   const updatedFriend = {
  //     name: friend.name,
  //     age: friend.age,
  //     email: friend.email
  //   };
  //   this.setState(updatedFriend);
  // };

  addNewFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = id => {
    console.log("ID", id, `http://localhost:5000/friends/${id}` , this.state.name);
    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios

      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    
    const deletedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios

      .delete(`http://localhost:5000/friends/${id}`, deletedFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };




  render() {
    return (
      <div className="app">
        <h1> My Friends </h1>


















        <Form >
          <Col sm={5}>
            <Input
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              placeholder="Name:  "
              type="text"
            />

            <Input
              onChange={this.handleChange}
              name="age"
              value={this.state.age}
              placeholder="Age:  "
              type="number"
            />

            <Input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="Email:  "
              type="email"
            />

            <br />
            <Button color="primary" onClick={this.addNewFriend}>
              Add Friend
          </Button>

            <Button color="danger" onClick={id => this.updateFriend(id)}>
              Update Friend
        </Button>
          </Col>
        </Form>
        <FriendsList
          friends={this.state.friends}
          handleEdit={this.updateFriend}
          handleDelete={this.deleteFriend}
        />

      </div>
    );
  }
}

export default App;
