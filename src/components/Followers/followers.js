import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const {isLoading, data, error} = this.props;
    console.log(this.props)
    if (isLoading) {return <div>Loading</div>}
    if (error) {return <div>Ошибка</div>}
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    if (data) {return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(follower => (
            <div className={styles.follower} key={follower.id}>
              <img
                className={styles.followerImg}
                src={follower.avatar_url}
                alt={follower.id}
              />
              <p className={styles.followerLogin}>{follower.login}</p>
            </div>
          ))
        }
      </div>
    );} else return <div className={cx(styles.root, 't-followers')}/>
  }
}
let state = ({followers: { isLoading, data, error } }) => ({isLoading, data, error});
// Используйте поля data, isLoading из стейта
export default connect(state)(Followers);
