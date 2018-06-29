import React from "react";
import EditFriend from "./EditFriend";
import Friend from "./Friend";
import {Link} from 'react-router-dom';



const FriendList = props => {
  return (

      <div>
            {props.friendsData.map(friend => {
		    return(
			    
		   <div key={friend.id} className="list-container">
	           <Friend  friend={friend} deleteFriend={props.deleteFriend} />
		   <EditFriend editFriend={props.editFriend}  friend={friend} />
	        </div>   	    
		    ); 
	    })}
      </div>
  );
}	



export default FriendList;	
