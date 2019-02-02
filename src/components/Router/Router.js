import React from 'react';
import Login from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Login} exact/>
      <PrivateRoute path='/search' component={Search}/>
    </Switch>
  </BrowserRouter>
)

export default Router;
// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
