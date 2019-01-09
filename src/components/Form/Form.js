import React from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

const userJames = {
    firstName: 'james',
    lastName: 'bond',
    password: '007'
}
export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        errors: {},
        isLogin: false
      }

    changeInput = event => {

    this.setState({[event.target.name]: event.target.value})
    }

    submitForm = event => {
        event.preventDefault();

        
        Object.keys(userJames).forEach(element => {
            console.log(element);
        });
        // if (userJames.firstName === this.state.firstName) {this.setState ({
        //     isLogin: true
        // })}
    //     const errors=['Нужно указать имя','Нужно указать фамилию','Нужно указать пароль'];

    //     if (this.state.firstName === '') {
    //         this.setState({ errors: {
    //             firstName: errors[0]
    //         } 

                
    //         })
    //     } 
    //     if (this.state.lastName === '') {
    //         this.setState({

                
    //         })
    //     } 
    //     if (this.state.password === '') {
    //         this.setState({

                
    //         })
    //     }

    //         this.setState({
    //             errors:{}
    //         })

    }

    render() {
        if (this.state.isLogin) {
            return (
                <div className="app-container">
                    <img src={Bond} alt="bond approve" className="t-bond-image"/>
                </div>

            )
        } else {
            return (
                <div className="app-container">
                    <form className="form" onSubmit={this.submitForm}>
                        <h1>Введите свои данные, агент</h1>
                        <p key="firstname" className="field">
                            <label className="field__label" htmlFor="firstname">
                                <span className="field-label">Имя</span>
                            </label>
                            <input className="field__input field-input t-input-firstname" type="text" name="firstName" onChange={this.changeInput} value={this.state.firstName.value} />
                            <span className="field__error field-error t-error-firstname">{this.state.errors.firstName}</span>
                        </p>
                        <p key="lastname" className="field">
                            <label className="field__label" htmlFor="lastname">
                                <span className="field-label">Фамилия</span>
                            </label>
                            <input className="field__input field-input t-input-lastname" type="text" name="lastName" onChange={this.changeInput} value={this.state.lastName.value} />
                            <span className="field__error field-error t-error-lastname" >{this.state.errors.lastName}</span>
                        </p>
                        <p key="password" className="field">
                            <label className="field__label" htmlFor="password">
                                <span className="field-label">Пароль</span>
                            </label>
                            <input className="field__input field-input t-input-password" type="text" name="password" onChange={this.changeInput} value={this.state.password.value} />
                            <span className="field__error field-error t-error-password">{this.state.errors.password}</span>
                        </p>
                        <div className="form__buttons">
                            <input type="submit" value="Проверить" className="button t-submit"/>
                        </div>
                    </form>
                </div>
            )
        }
        

            

    }
}