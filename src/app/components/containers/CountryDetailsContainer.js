import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions';
import CountryDetails from '../presentational/CountryDetails';

class CountryDetailsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }
  render() {
    return <CountryDetails country={this.props.selectedCountry} />;
  }
}

const mapStateToProps = function(store) {
  return {
    selectedCountry: store.countries.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetailsContainer);
