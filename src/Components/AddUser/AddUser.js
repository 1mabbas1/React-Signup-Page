import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";

const AddUser = (props) => {
  const [username, setUsername] = new useState("");
  const [email, setEmail] = new useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || email.trim().length === 0) {
      setError({
        errorTitle: "Invalid Input",
        errorMessage: "Please fill all the fields.",
      });
      return;
    }
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

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
        />
      )}
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
    </div>
  );
};

export default AddUser;
