import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  addFriendHandler = e => {
    this.setState({ friend: e.target.value })
  }


  render() {
    return (
      <div className="App">
      <FriendsList friends={this.state.friends} />
      <AddFriendForm 
        friend={this.state.friends}
        addFriendHandler={this.addFriendHandler}
        friendName={this.state.friends.name}
        friendAge={this.state.friends.age}
        friendEmail={this.state.friends.email}
      />
      </div>
    );
  }
}

export default App;
