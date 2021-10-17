import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Login } from "../../pages";

export default function ProtectedRoute({ children, props, ...rest }) {
  const { isLogin } = useSelector((state) => state.profile);
  return <Route {...rest} render={() => (isLogin ? children : <Login />)} />;
}
