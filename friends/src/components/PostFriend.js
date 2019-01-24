import React from 'react';

class PostFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  postFriend = e => {
    e.preventDefault();

    this.props.postFriendToServer(this.state.friend);

    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    })
  };

  handleChange = e => {
  this.setState({
    friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value
    }
  });
};

  render() {
    return(
      <form onSubmit={this.postFriend}>
        <input type='text'
               name='name'
               placeholder='Name'
               onChange={this.handleChange}
               value={this.state.friend.name}
               />
        <input type='text'
               name='age'
               placeholder='Age'
               onChange={this.handleChange}
               value={this.state.friend.age}
               />
        <input type='text'
               name='email'
               placeholder='Email'
               onChange={this.handleChange}
               value={this.state.friend.email}
               />

         {this.props.postError ? (
             <p>{this.props.postError}</p>
           ) : null}

         {this.props.postSuccessMessage ? (
           <p>{this.props.postSuccessMessage}</p>
         ) : null}

        <button type='submit'>
          Add Friend
        </button>
      </form>
    );
  }
}

export default PostFriend;
