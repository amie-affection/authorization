import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuth = (Component) => {
  function withAuth({ token, ...allProps }) {
    return token ? <Redirect to="/" /> : <Component {...allProps} />;
  }

  const mapStateToProps = (state) => {
    return {
      token: state.authRoot.token,
    };
  };

  return connect(mapStateToProps)(withAuth);
};

export default withAuth;
