import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    const {child} = this.props;
    return <AuthConsumer>{
      ({isAuthorized, email }) => 
        <footer className='footer'>
              {child}
              <p className='footer-message t-footer'>{(isAuthorized) ?'Вы вошли как ' + email :'Вы гость в этой системе'}</p>
            </footer>
        }
      </AuthConsumer>

  }
}

export default Footer;
