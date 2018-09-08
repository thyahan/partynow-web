import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className='header'>
      <p>{props.name}</p>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: '[[Default Web Name]]'
}

export default Header;