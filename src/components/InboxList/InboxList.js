import React, { Component } from 'react';
import { withData } from '../../context/Data/Data';
import MailList from '../MailList';

class InboxList extends Component {

    render() {
        let {data, match} = this.props;
        return <MailList data={data.inbox} path={match.path} flag='inbox'></MailList>
    }
}
export default withData(InboxList);



// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
