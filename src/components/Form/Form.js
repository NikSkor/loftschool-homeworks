import React from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

export class Form extends React.Component {
    render() {
        return (
            <div className="app-container">
                <form className="form">
                    <h1>Введите свои данные, агент</h1>
                    <p key="firstname" className="field">
                        <label className="field__label" htmlFor="firstname">
                            <span className="field-label">Имя</span>
                        </label>
                        <input value="" className="field__input field-input t-input-firstname" type="text" name="firstname" />
                        <span className="field__error field-error t-error-firstname"></span>
                    </p>
                    <p key="lastname" className="field">
                        <label className="field__label" htmlFor="lastname">
                            <span className="field-label">Фамилия</span>
                        </label>
                        <input value="" className="field__input field-input t-input-lastname" type="text" name="lastname" />
                        <span className="field__error field-error t-error-lastname"></span>
                    </p>
                    <p key="password" className="field">
                        <label className="field__label" htmlFor="password">
                            <span className="field-label">Пароль</span>
                        </label>
                        <input value="" className="field__input field-input t-input-password" type="text" name="password" />
                        <span className="field__error field-error t-error-password"></span>
                    </p>
                    <div className="form__buttons">
                        <input type="submit" value="Проверить" className="button t-submit"/>
                    </div>
                </form>
            </div>
        )
            

    }
}