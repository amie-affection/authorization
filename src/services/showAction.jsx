import React from "react";
import { connect } from "react-redux";

const showAction = (store) => (next) => (action) => {
  console.log(action);

  next(action);
};

export default showAction;
