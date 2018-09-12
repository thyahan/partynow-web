import { connect } from 'react-redux';
import { fetchArtist } from '../../redux/action/artist-action';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistItem from '../../components/ArtistItem';

class Artist extends Component {
  componentDidMount () {
    this.props.fetchArtist();
  }
  onArtistClick (e) {
    console.log(`clicked at ${e.name}`);
  }
  renderArtists (artists) {
    return artists.map((artist, i) => <ArtistItem key={i} data={artist} onClick={this.onArtistClick.bind(this)} />);
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
