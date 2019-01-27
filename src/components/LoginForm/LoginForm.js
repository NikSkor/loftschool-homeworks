import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthProvider, withAuth } from '../../context/Auth/Auth';
import style from './LoginForm.module.css';

class LoginForm extends Component{

    state = {
        email:'',
        password:''
    }


    changeHandler=(e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }
    loginHandler = (e) => {
        e.preventDefault();
        let props = this.props;
        let { email, password } = this.state;
        let authorize=props.authorize;
        authorize(email, password);
    }

    render() {
        let {email, password} = this.props;
        const { isAuthorized, authError } = this.props;

        if (isAuthorized) {
            return <Redirect to="/app" />
        }
        return <div className={style.bg}>
            <form action="" className={`${style.form} t-form`} onSubmit={this.loginHandler}>
                <p>
                    <label htmlFor="email">
                        <span className={style.labelText}>Почта</span>
                        <input type="text"
                        name="email"
                        value={email}
                        className={`${style.input} t-input-email`}
                        onChange={this.changeHandler}
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="password">
                        <span className={style.labelText}>Пароль</span>
                        <input type="password"
                        name="password"
                        value={password}
                        className={`${style.input} t-input-password`}
                        onChange={this.changeHandler}
                        />
                    </label>
                </p>
                {authError 
                ? <p className={style.error}>{authError}</p>
                : null
                }
                <div className={style.buttons}>
                    <button className={`${style.button} t-login`} >Войти</button>
                </div>
            </form>
        </div>
    }
}
export default withAuth(LoginForm);

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
