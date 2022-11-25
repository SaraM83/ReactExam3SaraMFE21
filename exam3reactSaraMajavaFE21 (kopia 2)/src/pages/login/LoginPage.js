import LoginComp from "../../components/login/LoginComp";
import { useEffect, useState } from "react";
import SignUp from "../../components/signUp/SignUp";

const LoginPage = () => {
  let [users, setUsers] = useState(
    localStorage.getItem("userKey")
      ? JSON.parse(localStorage.getItem("userKey"))
      : []
  );

  const addUser = (userObject) => {
    setUsers((users) => [...users, userObject]);
    localStorage.setItem("userKey", JSON.stringify([...users, userObject]));
  };

  return (
    <div>
      <h1>Welcome to movie page</h1>
      <LoginComp />
      <SignUp addUser={addUser} />
    </div>
  );
};

export default LoginPage;
