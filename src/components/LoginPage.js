import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authAction';

const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button onClick={props.startLogin} className="button">Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
