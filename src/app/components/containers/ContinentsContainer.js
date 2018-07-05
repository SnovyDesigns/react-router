import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import * as actions from '../../actions';

class ContinentsContainer extends Component {
  chooseContinent = event => {
    this.props.setContinent(event.target.value);
  };
  deleteCountry = id => {
    this.props.deleteCountry(id);
  };

  componentDidMount() {
    this.props.setContinent('Europa');
  }

  render() {
    return (
      <div>
        <select onChange={e => this.chooseContinent(e)}>
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
        </select>
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
    visibleCountries: store.countries.visibleCountries
  };
};

const mapDispatchToProps = dispatch => ({
  setContinent: name => dispatch(actions.setContinent(name)),
  deleteCountry: id => dispatch(actions.deleteCountry(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContinentsContainer);
