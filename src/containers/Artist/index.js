import { connect } from 'react-redux';
import { fetchArtist } from '../../redux/artist-action';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid whitesmoke;
  padding: 9px;
  padding-left: 32px;
  &:hover {
    background-color: whitesmoke;
  }
`;

class Artist extends Component {
  componentDidMount () {
    this.props.fetchArtist();
  }
  onArtistClick(artist){
    console.log(`clicked at ${artist.name}`);
  }
  renderArtists (artists) {
    return artists.map((artist, i) => {
      return <Item key={i} onClick={()=>{this.onArtistClick(artist)}}>
               {artist.name}
             </Item>;
    });
  }
  render () {
    console.log(this.props.artists);
    return (
      <div className='artist'>
        {this.renderArtists(this.props.artists)}
      </div>
    );
  }
}

Artist.propTypes = {
  artists: PropTypes.array
};

Artist.defaultProps = {
  artists: []
};

const mapStatToProps = state => ({
  artists: state.artist.artists
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: () => dispatch(fetchArtist())
});

export default connect(mapStatToProps, mapDispatchToProps)(Artist);
