import React, { useState } from "react";
import Cards from "./Cards";

export default function Form(props) {
  const [user, setUser] = useState({ username: "", email: "", role: "" });
  const [display, setDisplay] = useState([]);

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

  return (
    <>
      <Cards props={props} />
      <form
        onSubmit={event => {
          event.preventDefault();
          props.submit(user);
          setUser({
            name: "",
            email: "",
            role: ""
          });
        }}
      >
        <fieldset>
          <legend>Signup</legend>
          <div className="form-group row">
            <label for="username" className="col-sm-2 col-form-label">
              Username
              <div className="inputs">
                <input
                  type="text"
                  className="form-control"
                  name="name"
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
            <label for="role">Role</label>
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
