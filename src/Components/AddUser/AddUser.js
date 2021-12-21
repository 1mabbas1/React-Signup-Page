import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
