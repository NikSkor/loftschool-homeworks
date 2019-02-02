import './AppRouter';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';

let AppRouter = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Search} exact />
                <Route path="/shows/:id" component={ShowPage} />
            </Switch>
        </div>
    )
}
export default AppRouter;
// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
