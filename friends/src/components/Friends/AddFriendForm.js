import React from "react";

const AddFriendForm = props => {
  // console.log("ADD FRIEND FORM PROPS", props);
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit}>
        <h3>Add a new friend</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="newFriendName"
          placeholder="Name"
          onChange={props.newTextHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="newFriendEmail"
          placeholder="Emial"
          onChange={props.newTextHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="newFriendAge"
          placeholder="Age"
          onChange={props.newTextHandler}
        />
        <button type="submit" className="waves-effect waves-light btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddFriendForm;
