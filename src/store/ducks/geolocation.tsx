export interface GeolocationState {
  tried: boolean;
  allowed: boolean | null;
  error: number | null;
}

// Action Types
const types = {
  tried: 'tried',
  allowed: 'allowed',
  error: 'error',
};

// Initial State
const initial: GeolocationState = {
  tried: false,
  allowed: null,
  error: null,
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
export const setTried = (value: boolean) => ({
  type: types.tried,
  payload: value,
});

export const setAllowed = (value: boolean | null) => ({
  type: types.allowed,
  payload: value,
});

export const setError = (value: number | null) => ({
  type: types.error,
  payload: value,
});

export const reset = () => ({
  type: 'reset',
});
