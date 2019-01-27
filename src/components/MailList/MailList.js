import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './MailList.module.css';

let summary = (text) => {
    return text.slice(0 , 46) + '...';    
}
class MailList extends Component {
    render() {
        
        let{data, path, flag}= this.props;

        return <div className={`${style.container} t-${flag}-list`}>
            {data.map((el)=>
            <Link key={el.id} className={style.link} to={`${path}/${el.id}`} >
            {summary(el.body)}</Link>
            )}
        </div>

    }
}
export default MailList;



// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
