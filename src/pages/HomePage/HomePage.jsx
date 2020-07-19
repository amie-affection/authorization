import React from "react";
import { connect } from "react-redux";

const HomePage = ({ isShowText, makeToggle }) => {
  const toggle = () => makeToggle();

  return (
    <>
      <h2>HomePage</h2>
      <button type="button" onClick={toggle}>
        Flag
      </button>

      {isShowText && <p>TEXT</p>}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isShowText: state.authRoot.isShowText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeToggle: () => dispatch({ type: "auth/IS_SHOW_TEXT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
