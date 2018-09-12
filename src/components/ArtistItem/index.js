import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ArtistItem = ({data, onClick}) => {
  return (
    <div className='artist-item' onClick={()=>onClick(data)}>
      <div className='id'>
        {data.id}
      </div>
      <div className='name'>
        {data.name}
      </div>
      <div className='status'>
        {data.status.toString()}
      </div>
    </div>
  );
};

ArtistItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool
  }),
  onClick: PropTypes.func
};

export default ArtistItem;
