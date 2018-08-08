import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList.js';
import Form from './components/Form/Form.js';
import './App.css';
// https://github.com/LambdaSchool/HTTP-AJAX/pull/275
class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then((response)=>{
        console.log(response.data);
        this.setFriendsToState(response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  setFriendsToState = (f) => {
    console.log(f);
    let curr = this.state.friends;
    this.setState({
      friends: f
    })
  }

  render() {
    console.log(this.state.friends);
    
    return (
      <div className="App">
        <Form />
        <FriendList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
