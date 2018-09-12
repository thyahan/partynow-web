import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { logout, initialLoginData } from '../../redux/action/login-action';
import _ from 'lodash';
/**
 * Component
 */
import Header from '../../components/Header';

class HomePage extends Component {
  componentDidMount () {
    this.props.core.login();
  }
  render () {
    const userId = _.get(this.props, 'loginInfo.id', '');
    const userName = _.get(this.props, 'loginInfo.name', '');
    const preloadValue = _.get(this.props, 'preload.value', '');
    return (
      <div className='home-page'>
        <Header name={preloadValue} />
        <p>
          {`Hello userId:${userId} name:${userName}`}
        </p>
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.func,
    logout: PropTypes.func,
    info: PropTypes.object
  }),
  preload: PropTypes.object
};

const mapStateToProps = state => ({
  loginInfo: state.login.userInfo,
  preload: state.preload,
  state: state
});

const mapDispatchToProps = dispatch => ({
  core: {
    login: () => dispatch(initialLoginData()),
    logout: () => dispatch(logout())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
