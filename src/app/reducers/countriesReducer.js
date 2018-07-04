import * as constants from '../constants';
import countriesData from '../../database/countries.json';

const initialState = {
  countries: countriesData
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_COUNTRIES:
      return { ...state, countries: state.countries };
    default:
      return state;
  }
};
