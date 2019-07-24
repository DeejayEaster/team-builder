import React, { useState } from "react";
import Cards from "./Cards";

export default function Form() {
  const [user, setUser] = useState({ username: "", email: "", role: "" });

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    // console.log(
    //   "handleChange",
    //   event.target.name,
    //   event.target.value,
    //   updatedUser
    // );
    setUser(updatedUser);
  }
  // function handleEmail(event) {
  //   console.log("changed Email", event.target.value);
  //   setUser({ email: event.target.value });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user state", user);
  }

  return (
    <>
      <Cards />
      <form onSubmit={event => handleSubmit(event)}>
        <fieldset>
          <legend>Signup</legend>
          <div className="form-group row">
            <label for="username" className="col-sm-2 col-form-label">
              Username
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              placeholder="role"
              onChange={handleChange}
              value={user.role}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

/* 
const TeamMembers = [
  {
    name: "Kevin",
    email: "KevinRulzURface666@Bmail.com",
    role: "CEO"
  },
  {
    name: "Timmy",
    email: "TimmyRulzURface666@Bmail.com",
    role: "CTO"
  },
  {
    name: "Janet",
    email: "janet.barret@gmail.com",
    role: "IT Manager"
  },
  {
    name: "Kevin T.",
    email: "KevinTRulzURface666@Bmail.com",
    role: "Janitor"
  },
  {
    name: "Bob Sachel",
    email: "BOBRulzURface666@Bmail.com",
    role: "Full Stack Developer"
  }
];
*/
