import * as constants from '../constants';

export const getCountries = () => ({
  type: constants.GET_COUNTRIES
});

export const getCountry = id => ({
  type: constants.GET_COUNTRY,
  payload: {
    id
  }
});

export const deleteCountry = id => ({
  type: constants.DELETE_COUNTRY,
  payload: {
    id
  }
});

export const searchCountries = searchText => ({
  type: constants.SEARCH_COUNTRIES,
  payload: {
    searchText
  }
});

export const setContinent = name => ({
  type: constants.SET_CONTINENT,
  payload: {
    name
  }
});
