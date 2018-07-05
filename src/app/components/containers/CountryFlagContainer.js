import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import * as actions from '../../actions';
import '../../../css/country.css';

class CountryFlagContainer extends Component {
  componentDidMount() {
    this.props.getCountries();
    this.props.searchCountries('');
  }
  search = event => {
    this.props.searchCountries(event.currentTarget.value);
  };
  deleteCountry = id => {
    this.props.deleteCountry(id);
  };
  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)} />
        </div>
        <CountryFlagList
          countries={this.props.visibleCountries}
          deleteCountry={this.deleteCountry.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countries.countries,
    visibleCountries: store.countries.visibleCountries
  };
};

const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch(actions.getCountries()),
  searchCountries: searchText => dispatch(actions.searchCountries(searchText)),
  deleteCountry: id => dispatch(actions.deleteCountry(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryFlagContainer);
