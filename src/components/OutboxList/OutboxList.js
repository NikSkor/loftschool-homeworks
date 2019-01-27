import React, { Component } from 'react';
import { withData } from '../../context/Data/Data';
import MailList from '../MailList';

class OutboxList extends Component {

    render() {
        let {data, match} = this.props;
        return <MailList data={data.outbox} path={match.path} flag='outbox'></MailList>
    }
}
export default withData(OutboxList);

// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
