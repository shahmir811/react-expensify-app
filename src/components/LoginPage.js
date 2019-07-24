import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authAction';

const LoginPage = (props) => (
  <div>
    <button onClick={props.startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
