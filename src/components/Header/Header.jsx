import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ token, makeLogout }) => {
  const logout = () => makeLogout();

  return (
    <header>
      <nav>
        <ul>
          <li
            style={{
              marginBottom: "5px",
              background: "blue",
              width: "105px",
              height: "30px",
              lineHeight: "30px",
              color: "red",
            }}
          >
            <Link
              to="/"
              style={{ color: "white", paddingLeft: "5px", fontSize: "20px" }}
            >
              HomePage
            </Link>
          </li>

          {token && (
            <li
              style={{
                marginBottom: "5px",
                background: "blue",
                width: "105px",
                height: "30px",
                lineHeight: "30px",
                color: "red",
              }}
            >
              <Link
                to="/userProfile"
                style={{ color: "white", paddingLeft: "5px", fontSize: "20px" }}
              >
                UserProfile
              </Link>
            </li>
          )}

          {!token && (
            <li
              style={{
                marginBottom: "5px",
                background: "blue",
                width: "105px",
                height: "30px",
                lineHeight: "30px",
                color: "red",
              }}
            >
              <Link
                to="/auth"
                style={{ color: "white", paddingLeft: "5px", fontSize: "20px" }}
              >
                AuthPage
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {token && (
        <button
          type="button"
          onClick={logout}
          style={{
            marginLeft: "38px",
            border: "none",
            width: "108px",
            height: "30px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authRoot.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeLogout: () =>
      dispatch({
        type: "auth/LOGOUT_SUCCESS",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
