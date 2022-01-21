import { combineReducers } from 'redux';

import city, { CityState } from './city';

export interface ReduxState {
  city: CityState;
}

const reducers = combineReducers({
  city,
});

export default reducers;
