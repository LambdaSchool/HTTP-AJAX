import React, { Component } from 'react'
import './App.css'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend';
import { Route } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {friends:[], name: '', age: '', email: '', redirect: false}
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data }))
            .catch(e => console.log(e))
    }


    handleChange = (e) => {
        const target = e.target
        const value = target.name === 'age' ? parseInt(target.value) : target.value
        const name = target.name
        this.setState({
            [name]: value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
            .then((response) => this.setState({ friends: response.data, name: '', age: '', email: '', redirect: true}))
            .catch(e => console.log("ERROR", e))
    }






    render() {

        return (
            <div className="App">
                <Route exact path="/friends" render={(props) => (<FriendList {...props} friends={this.state.friends} />)} />
                <Route exact path="/addfriend" render={(props) => (<AddFriend {...props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} name={this.state.name} age={this.state.age} email={this.state.email} redirect={this.state.redirect} />)} />
            </div>
        )
    }
}

export default App
