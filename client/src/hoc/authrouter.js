import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import {store} from '../redux/store'

const AuthRoute = props => {

  const state = store.getState();

  const isAuthUser = state.loginReducer.isAuthUser;
  const {type, path } = props;
  
  if (!isAuthUser) return <Redirect to="/" />;
  //else return <Redirect to= {path} />;

  return <Route {...props} />;
};



export default AuthRoute;