import React from 'react'
import Friend from './Friend';
import './index.css'
import { NavLink } from 'react-router-dom'


class FriendList extends React.Component {

    render() {
        return (
            <div className="friendInfo">
                <NavLink className="link" to='/'>
                    Click to go back to Home/Friend add
                </NavLink>
                {this.props.friends.map(obj => {
                    return (
                        
                        <Friend  update={this.props.update} key={obj.id} friends={obj} delete={this.props.delete} />
                        
                    );
                })}
            </div>
        );
    }
}

export default FriendList