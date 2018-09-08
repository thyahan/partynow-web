import { connect } from 'react-redux';
import React from 'react';

const About = props => {
  return (
    <div className='about'>
      <p>About</p>
    </div>
  );
};

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({dispatch: action=>dispatch(action)});

export default connect(mapStateToProps, mapDispatchToProps)(About);