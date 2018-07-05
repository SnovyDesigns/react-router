import * as constants from '../constants';
import countriesData from '../../database/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_COUNTRIES:
      return { ...state, countries: state.countries };
    case constants.GET_COUNTRY:
      const selectedCountry = state.countries.find(
        country => country.id === parseInt(action.payload.id, 10)
      );
      return { ...state, selectedCountry };
    case constants.SEARCH_COUNTRIES:
      const foundCountries = state.countries.filter(country =>
        country.name
          .toLowerCase()
          .includes(action.payload.searchText.toLowerCase())
      );
      return { ...state, visibleCountries: foundCountries };
    case constants.DELETE_COUNTRY:
      const notDeletedCountries = state.countries.filter(
        country => country.id !== action.payload.id
      );
      const notDeletedVisibleCountries = state.visibleCountries.filter(
        country => country.id !== action.payload.id
      );
      return {
        ...state,
        countries: notDeletedCountries,
        visibleCountries: notDeletedVisibleCountries
      };
    case constants.SET_CONTINENT:
      const continentCountries = state.countries.filter(
        country => country.continent === action.payload.name
      );
      return { ...state, visibleCountries: continentCountries };
    default:
      return state;
  }
};
