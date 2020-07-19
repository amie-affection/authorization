import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ token }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>

          {token && (
            <li>
              <Link to="/userProfile">UserProfile</Link>
            </li>
          )}

          {!token && (
            <li>
              <Link to="/auth">AuthPage</Link>
            </li>
          )}
        </ul>
      </nav>

      {token && <button type="button">Logout</button>}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authRoot.token,
  };
};

export default connect(mapStateToProps)(Header);
