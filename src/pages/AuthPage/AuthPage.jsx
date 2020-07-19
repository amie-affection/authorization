import React, { useState } from "react";
import withAuth from "../../hoc/withAuth";
import { useDispatch } from "react-redux";
import loginOperations from '../../redux/auth/authReducer';

const AuthPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const changeLogin = ({ target }) => setLogin(target.value);
  const changePassword = ({ target }) => setPassword(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginOperations(login, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={login}
        onChange={changeLogin}
        placeholder="Login"
        style={{ marginLeft: "20px", marginRight: "10px", height: "25px" }}
      />
      <input
        type="text"
        value={password}
        onChange={changePassword}
        placeholder="Password"
        style={{ marginRight: "10px", height: "25px" }}
      />
      <button
        type="submit"
        style={{
          height: "30px",
          width: "70px",
          border: "none",
          background: "black",
          color: "white",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default withAuth(AuthPage);
