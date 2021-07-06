import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function friends(props){

    return (
    <div>  
        {/* {button we use to show our add new friend form; navlink is used to make button dissappear if form is rendered} */}
        <div className='addFriend-btn-container'>
            <NavLink to='/friends/addFriend' className='normal' activeClassName='active' ><button onClick={() => props.addBtnClear()}>Add New Friend</button></NavLink>
        </div>
        {/* {keeps track of how many friends we currently have and displays it above our list of friends} */}
        <h2>Current Friend List of {props.info.data.length}</h2>

        <div className='friendsList-container'>
            {/* {maps through our list of data of friends that we passed as props and displays each friend on their individual card} */}
            {props.info.data.map(friend => (
                <div key={friend.id} className='friend-container'>
                    <div className='friend-label-container'>
                        <div className='infoFriendment'>Name:</div>
                        <div className='infoFriendment'>Age:</div>
                        <div className='infoFriendment'>Email:</div>
                    </div>
                    <div className='friend-info-content'>
                        <div className='infoFriendment'><span>{friend.name}</span></div>
                        <div className='infoFriendment'><span>{friend.age}</span></div> 
                        <div className='infoFriendment'><span>{friend.email}</span></div>
                    </div>
                    
                    <div className='friend-option-container'>
                        {/* {delete button will invoke method that will request the server to delete this object} */}
                        <button className='friend-option-btn' onClick={() => props.deleteFriend(friend.id)}>delete</button> 
                        {/* {update button will link a new url that will render our update form, editFriend() does setState of keys (inputName, inputAge, inputEmail) which will update our update our form input fields with this friend current (name, age, email)} */}
                        <Link to={`/friends/update/${friend.id}`} onClick={() => props.editFriend(friend.name, friend.age, friend.email)} ><button className='friend-option-btn'>update</button></Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default friends;