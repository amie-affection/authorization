import React from "react";
import { connect } from "react-redux";

const HomePage = ({ isShowText, makeToggle, showTextNow, hideTextNow }) => {
  const toggle = () => makeToggle();

  const showText = () => showTextNow();

  const hideText = () => hideTextNow();

  return (
    <>
      <h2>HomePage</h2>

      <button
        type="button"
        onClick={toggle}
        style={{
          marginRight: "10px",
          border: "none",
          backgroundColor: "orange",
          width: "80px",
          height: "30px",
        }}
      >
        Flag
      </button>

      <button
        type="button"
        onClick={showText}
        style={{
          marginRight: "10px",
          border: "none",
          backgroundColor: "orange",
          width: "80px",
          height: "30px",
        }}
      >
        Show Text
      </button>

      <button
        type="button"
        onClick={hideText}
        style={{
          marginRight: "10px",
          border: "none",
          backgroundColor: "orange",
          width: "80px",
          height: "30px",
        }}
      >
        Hide Text
      </button>

      {isShowText && <p style={{ fontSize: "30px" }}>Welcome!</p>}
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

    showTextNow: () =>
      dispatch({
        type: "auth/SHOW_TEXT",
        payload: true,
      }),

    hideTextNow: () =>
      dispatch({
        type: "auth/HIDE_TEXT",
        payload: false,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
