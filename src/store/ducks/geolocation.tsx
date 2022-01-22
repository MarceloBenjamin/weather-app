export interface GeolocationState {
  lat: number;
  lon: number;
  tried: boolean;
  allowed: boolean | null;
  error: string;
}

// Action Types
const types = {
  lat: 'lat',
  lon: 'lon',
  tried: 'tried',
  allowed: 'allowed',
  error: 'error',
};

// Initial State
const initial: GeolocationState = {
  lat: 0,
  lon: 0,
  tried: false,
  allowed: null,
  error: '',
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
export const setLat = (value: number) => ({
  type: types.lat,
  payload: value,
});

export const setLon = (value: number) => ({
  type: types.lon,
  payload: value,
});

export const setTried = (value: boolean) => ({
  type: types.tried,
  payload: value,
});

export const setAllowed = (value: boolean | null) => ({
  type: types.allowed,
  payload: value,
});

export const setError = (value: string) => ({
  type: types.error,
  payload: value,
});

export const reset = () => ({
  type: 'reset',
});
