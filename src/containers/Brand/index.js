import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findBrand } from '../../redux/action/brand-action';

class Brand extends Component {
  componentDidMount () {
    this.props.findBrand();
  }
  renderBrands (brands) {
    return brands.map((brand, i) => {
      return <div key={i}>
               <img style={{width: '200px', height: '200px'}} src={brand.profile_image} alt={brand.id} />
               <p>
                 {`${brand.name}`}
               </p>
             </div>;
    });
  }
  render () {
    return (
      <div className='brand'>
        {this.renderBrands(this.props.brands)}
      </div>
    );
  }
}

Brand.propTypes = {
  brands: PropTypes.array
};

Brand.defaultProps = {
  brands: []
};

const mapStateTopProp = state => ({
  brands: state.brand.brands
});

const mapDispatchToProps = dispatch => ({
  findBrand: () => dispatch(findBrand())
});

export default connect(mapStateTopProp, mapDispatchToProps)(Brand);
