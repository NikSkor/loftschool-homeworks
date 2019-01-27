import React, { Component } from 'react';
import style from './Home.module.css';

export default class Home extends Component {
    render() {
        return <div className={style.container}>
            <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
        </div>
    }
}



// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
