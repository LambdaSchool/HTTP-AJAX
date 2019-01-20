import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import FriendsList from './components/FriendsList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" component={FriendsList} />
      </div>
    );
  }
}

export default App;
