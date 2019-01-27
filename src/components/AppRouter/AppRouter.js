import style from './AppRouter.module.css';
import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'

import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
    state={
        section: 'Home'
    }
    clickHandler=(e)=>{
       let name=e.target.name;
       this.setState({section: name})
    }

    render(){
        let path= this.props.match.path;
        let section = this.state.section;

        return <div className={style.wrapper}>
            <div className={style.container}>
                <nav className={style.nav}>
                    <ul className={`${style.navList} t-nav-list`}>
                        <li className={style.navElement}>
                            <NavLink
                            className={`${style.link} t-link-home`}
                            to={path}
                            exact
                            activeClassName={style.active}
                            onClick={this.clickHandler}
                            name='Home'
                            >Home</NavLink>
                        </li>
                        <li className={style.navElement}>
                            <NavLink
                            className={`${style.link} t-link-inbox`}
                            to={`${path}/inbox`}
                            activeClassName={style.active}
                            onClick={this.clickHandler}
                            name='Inbox'
                            >Inbox</NavLink>
                        </li>
                        <li className={style.navElement}>
                            <NavLink
                            className={`${style.link} t-link-outbox`}
                            to={`${path}/outbox`}
                            activeClassName={style.active}
                            name='Outbox'
                            onClick={this.clickHandler}
                            >Outbox</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={style.content}>
                    <h3 className={style.title}>{section}</h3>
                    <Route path={path} exact component={Home} />
                    <Route path={`${path}/inbox`} exact component={InboxList} />
                    <Route path={`${path}/outbox`} exact component={OutboxList}/>
                    <Route path={`${path}/inbox/:id`} component={InboxMail}/>
                    <Route path={`${path}/outbox/:id`} component={OutboxMail}/>
                </div>
            </div>
        </div>
    }
}
export default AppRouter;


// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
