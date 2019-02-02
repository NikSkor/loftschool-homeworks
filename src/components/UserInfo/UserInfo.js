import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const {isLoading, data, error} = this.props;
    console.log(this.props)
    if (isLoading) {return <div>Loading</div>}
    if (error) {return <div>Ошибка</div>}
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    if (data) {
      return (
        <div className={styles.root}>
          <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  src={data.avatar_url}
                  alt="user info"
                />
              </div>
              <div>
                <p className="t-user-name">{data.name}</p>
                <p className="t-user-bio">{data.bio}</p>
              </div>
        </div>
      );

    } else return <div className={styles.root}/>

  }
}

// Используйте поля data, isLoading из стейта
let state = ({user: {isLoading, data, error}}) => ({isLoading, data, error})
export default connect(state)(UserInfo);
