import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

let PrivateRoute = ({ isAuthorized, component, ...rest }) => {
  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  return <Route to="/app" {...rest} component={component} />;
};
// class PrivateRoute extends Component {
//   Реализуйте приватный роут.
//   Он должен проверять статус авторизации
//   и перенаправлять пользователя на страницу логина,
//   если тот не авторизован.
// }

export default withAuth(PrivateRoute);
