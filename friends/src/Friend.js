import React, {Fragment} from 'react';
 const Friend = props => {
    const {name, age, email} = props.friend;
    return (
      <div>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p> 
      </div>
    );
  };
  
  export default Friend;