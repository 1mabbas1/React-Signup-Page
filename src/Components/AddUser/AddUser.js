import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = new useState("");
  const [email, setEmail] = new useState("");

  const submitHandler = (event) => {
    if (username.trim() === 0 || email.trim() === 0) {
      return;
    }
    event.preventDefault();
    props.onAddUser(username, email);
    setUsername("");
    setEmail("");
  };

  const newUsername = (event) => {
    setUsername(event.target.value);
  };

  const newEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={newUsername}
          value={username}
          id="username"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <input onChange={newEmail} value={email} id="email" type="email" />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
