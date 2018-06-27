import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friendsData: response.data }))
      .catch(err => console.log(err))
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email }
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => this.setState({ friendsData: response.data, name: '', age: '', email: '' }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/'>Edit</Link>
        </div>
        <FriendsList friends={this.state.friendsData} />
        <AddFriendForm handleInput={this.handleInput} onClick={this.handleSubmit} name={this.state.name} age={this.state.age} email={this.state.email} />
      </div>
    );
  }
}

export default App;
