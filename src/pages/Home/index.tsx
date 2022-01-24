import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import {
  setTemp,
  setWind,
  setClouds,
  setCity,
  setLatitude,
  setLongetude,
  setCityName,
  setDescription,
  setIconId,
  setLoading,
  setErrorMessage,
  setUpdate,
} from '@ducks/city';

import api from '@api';

import { Grid, useTheme } from '@mui/material';

import PageGrid from '@components/PageGrid';

import CitiesAutocomplete from '@components/CitiesAutocomplete';
import Weather from '@components/Weather';
import WeatherInfo from '@components/WeatherInfo';
import GeolocationModal from '@components/GeolocationModal';
import GeolocationHandler from '@components/GeolocationHandler';
import BackgroundImage from '@components/BackgroundImage';

import { ContainerInput, ContainerValue, ContainerInfo } from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { city, update, latitude, longetude } = useSelector(
    (state: ReduxState) => state.city,
  );

  const getParams = () => {
    if (city === null) {
      return { lat: latitude, lon: longetude };
    }

    return { q: city };
  };

  const getWeather = async () => {
    dispatch(setLoading(true));
    try {
      const { data } = await api.get('/data/2.5/weather', {
        params: {
          ...getParams(),
        },
      });

      dispatch(setTemp(data?.main || null));
      dispatch(setWind(data?.wind || null));
      dispatch(setClouds(data?.clouds || null));
      dispatch(setLatitude(data?.coord?.lat || 0));
      dispatch(setLongetude(data?.coord?.lon || 0));
      dispatch(setCityName(data?.name || ''));
      dispatch(setDescription(data?.weather[0]?.description || ''));
      dispatch(setIconId(data?.weather[0]?.icon || ''));

      dispatch(setCity(null));
    } catch (error: any) {
      if (error?.response?.status === 404) {
        dispatch(setErrorMessage(`Cidade "${city}" não encontrada`));
      } else {
        dispatch(setErrorMessage(`Erro ao procurar`));
      }
    } finally {
      dispatch(setLoading(false));
      dispatch(setUpdate(false));
    }
  };

  useEffect(() => {
    if (city !== null) {
      getWeather();
    } else if (update && latitude !== 0 && longetude !== 0) {
      getWeather();
    }
  }, [city, update]);

  return (
    <>
      <BackgroundImage />

      <GeolocationModal />

      <PageGrid>
        <Grid
          item
          xs={12}
          md={12}
          lg={5}
          sx={{
            [theme.breakpoints.up('xs')]: { height: 'auto' },
            [theme.breakpoints.up('md')]: { height: 'auto' },
            [theme.breakpoints.up('lg')]: { height: 500 },
          }}
        >
          <ContainerInput>
            <CitiesAutocomplete />

            <GeolocationHandler />
          </ContainerInput>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={7}
          sx={{
            [theme.breakpoints.up('xs')]: { height: 'auto' },
            [theme.breakpoints.up('md')]: { height: 'auto' },
            [theme.breakpoints.up('lg')]: { height: 500 },
          }}
        >
          <ContainerValue>
            <Weather />
          </ContainerValue>
        </Grid>

        <Grid item xs={12}>
          <ContainerInfo>
            <WeatherInfo />
          </ContainerInfo>
        </Grid>
      </PageGrid>
    </>
  );
};

export default Home;
