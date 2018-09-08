import { connect } from 'react-redux';
import React from 'react';

const PageNotFound = props => {
  return (
    <div className='page-not-found'>
      <p>Page Not Found</p>
    </div>
  );
};

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({dispatch: action=>dispatch(action)});

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);