import React from 'react';

import Friend from './Friend';

const Friends = props => {
  return (
    <>
      {props.friends.map(friend => (
        <Friend friend={friend} />
      ))}
    </>
  );
};

export default Friends;
