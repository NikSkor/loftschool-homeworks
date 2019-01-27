import React, { Component } from 'react';
import style from './Mail.module.css';

class Mail extends Component {
    render() {
        let {to, from, body, flag} = this.props;

        return <div className={style.container}>
            <p className={`t-mail-${flag}`}>{(!to) ? `From: ${from}` : `To: ${to}`}</p>
            <p className="t-mail-body" >{body}</p>
        </div>
    }
}
export default Mail;


// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
