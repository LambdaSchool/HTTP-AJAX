import React from 'react';
import PropTypes from 'prop-types';
import { AddInputField, AddButton, AddForm } from '../ReusableComponents/FriendsCard';

const AddFriendForm = props => {
    return (
        <AddForm onSubmit={event => event.preventDefault()}>

            <AddInputField value={props.name} onChange={props.handleInput} type='text' placeholder='Name' name='name' />
            <AddInputField value={props.age} onChange={props.handleInput} type='text' placeholder='Age' name='age' />
            <AddInputField value={props.email} onChange={props.handleInput} type='text' placeholder='Email' name='email' />
            <AddInputField value={props.food} onChange={props.handleInput} type='text' placeholder='Food' name='food' />

            <AddButton type='submit' color='primary' onClick={props.onClick}>Submit</AddButton>

        </AddForm>
    );
}

AddFriendForm.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
}

export default AddFriendForm;