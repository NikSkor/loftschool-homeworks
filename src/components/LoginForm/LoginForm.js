import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth/Auth';
import style from './LoginForm.module.css';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{

}
export default withAuth(LoginForm);

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
