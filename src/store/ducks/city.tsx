interface Temp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

export interface CityState {
  city: string | null;
  temp: Temp | null;
  wind: Wind | null;
  clouds: Clouds | null;
}

// Action Types
const types = {
  city: 'city',
  temp: 'temp',
  wind: 'wind',
  clouds: 'clouds',
};

// Initial State
const initial: CityState = {
  city: null,
  temp: null,
  wind: null,
  clouds: null,
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

export const setWind = (value: Wind | null) => ({
  type: types.wind,
  payload: value,
});

export const setClouds = (value: Clouds | null) => ({
  type: types.clouds,
  payload: value,
});

export const reset = () => ({
  type: 'reset',
});
