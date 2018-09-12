import React, { Component } from 'react';
import axios from 'axios';
import CardList from './components/Cards/CardList';
import './App.css';
import Styled from 'styled-components';

const Container = Styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data})
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  render() {
    return (
      <Container>
        <CardList data={this.state.friends} />
      </Container>
    );
  }
}

export default App;
