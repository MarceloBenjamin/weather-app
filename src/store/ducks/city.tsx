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
  tempType: string;
  temp: Temp | null;
  wind: Wind | null;
  clouds: Clouds | null;
  latitude: number;
  longetude: number;
  cityName: string;
  description: string;
  iconId: string;
  loading: boolean;
  errorMessage: string;
  update: boolean;
}

// Action Types
const types = {
  city: 'city',
  tempType: 'tempType',
  temp: 'temp',
  wind: 'wind',
  clouds: 'clouds',
  latitude: 'latitude',
  longetude: 'longetude',
  cityName: 'cityName',
  description: 'description',
  iconId: 'iconId',
  loading: 'loading',
  errorMessage: 'errorMessage',
  update: 'update',
};

// Initial State
const initial: CityState = {
  city: null,
  tempType: 'Celsius',
  temp: null,
  wind: null,
  clouds: null,
  latitude: 0,
  longetude: 0,
  cityName: '',
  description: '',
  iconId: '',
  loading: false,
  errorMessage: '',
  update: false,
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
export const setCity = (value: string | null | unknown) => ({
  type: types.city,
  payload: value,
});

export const setTempType = (value: string) => ({
  type: types.tempType,
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

export const setLatitude = (value: number) => ({
  type: types.latitude,
  payload: value,
});

export const setLongetude = (value: number) => ({
  type: types.longetude,
  payload: value,
});

export const setCityName = (value: string) => ({
  type: types.cityName,
  payload: value,
});

export const setDescription = (value: string) => ({
  type: types.description,
  payload: value,
});

export const setIconId = (value: string) => ({
  type: types.iconId,
  payload: value,
});

export const setLoading = (value: boolean) => ({
  type: types.loading,
  payload: value,
});

export const setErrorMessage = (value: string) => ({
  type: types.errorMessage,
  payload: value,
});

export const setUpdate = (value: boolean) => ({
  type: types.update,
  payload: value,
});

export const reset = () => ({
  type: 'reset',
});
