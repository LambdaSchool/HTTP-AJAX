import React from 'react';

const NewFriend = props => {
    const { newFriend } = props;
    console.log(newFriend);
    return (
        <div>
            <h2>Add New Friend</h2>
            <form>
                <label>Name: </label>
                <input 
                    type='text'
                    placeholder='Enter Name'
                    onChange={props.handleChange}
                    name='name'
                    value={newFriend.name}
                />
                <br />

                <label>Age: </label>
                <input 
                    type='number'
                    placeholder='Enter Age'
                    onChange={props.handleChange}
                    name='age'
                    value={newFriend.age}
                />
                <br />

                <label>Email: </label>
                <input 
                    type='email'
                    placeholder='Enter Email'
                    onChange={props.handleChange}
                    name='email'
                    value={newFriend.email}
                />
                <br />

                <button onClick={props.submitNewFriend}>Add New Friend</button>
            </form>
        </div>
    )
}

export default NewFriend;