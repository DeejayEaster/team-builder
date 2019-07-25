import React, { useState } from "react";

const Cards = props => {
  const [member, setMember] = useState({ ...props.member });
  const [editing, setEditing] = useState(false);
  const handleChange = event =>
    setMember({ ...member, [event.target.name]: event.target.value });

  if (editing) {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          props.update(member);
          setMember({ ...member });
          setEditing(false);
        }}
        className="update-form"
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            onChange={handleChange}
            value={member.name}
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            onChange={handleChange}
            value={member.email}
            name="email"
          />
        </label>
        <label htmlFor="role">
          Role:
          <input
            type="text"
            onChange={handleChange}
            value={member.role}
            name="role"
          />
        </label>
        <button>Update</button>
      </form>
    );
  } else {
    return (
      <div className="member">
        <sup onClick={() => props.del(props.member)}>X</sup>

        <h3>Name: {props.member.name}</h3>
        <h3>Email: {props.member.email}</h3>
        <h3>Role: {props.member.role}</h3>

        <button onClick={() => setEditing(true)}>Edit Member</button>
      </div>
    );
  }
};

export default Cards;
