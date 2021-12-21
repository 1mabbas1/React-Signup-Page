import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UsersList from "./Components/AddUser/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);

  function addUserHandler(username, email) {
    setusersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), username: username, email: email },
      ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
