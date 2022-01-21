interface Temp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface CityState {
  city: string | null;
  temp: Temp | null;
}

// Action Types
const types = {
  city: 'city',
  temp: 'temp',
};

// Initial State
const initial: CityState = {
  city: null,
  temp: null,
};

// Reducer
export default function reducer(state = initial, action: any) {
  if (action?.type !== 'reset' && action?.type in types) {
    return { ...state, [action.type]: action.payload };
  }

  if (action.type === 'reset') {
    return initial;
  }

  return state;
}

// Actions
export const setCity = (value: string | null) => ({
  type: types.city,
  payload: value,
});

export const setTemp = (value: Temp | null) => ({
  type: types.temp,
  payload: value,
});

export const reset = () => ({
  type: 'reset',
});
