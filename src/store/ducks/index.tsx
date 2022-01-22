import { combineReducers } from 'redux';

import city, { CityState } from './city';
import geolocation, { GeolocationState } from './geolocation';

export interface ReduxState {
  city: CityState;
  geolocation: GeolocationState;
}

const reducers = combineReducers({
  city,
  geolocation,
});

export default reducers;
