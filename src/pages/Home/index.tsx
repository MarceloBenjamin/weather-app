import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import {
  setTemp,
  setWind,
  setClouds,
  setCity,
  setLoading,
  setErrorMessage,
} from '@ducks/city';

import api from '@api';

import { Grid } from '@mui/material';

import PageGrid from '@components/PageGrid';

import CitiesAutocomplete from '@components/CitiesAutocomplete';
import Weather from '@components/Weather';
import WeatherInfo from '@components/WeatherInfo';
import GeolocationModal from '@components/GeolocationModal';

import { ContainerInput, ContainerValue, ContainerInfo } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state: ReduxState) => state.city);

  const getWeather = async () => {
    dispatch(setLoading(true));
    try {
      const { data } = await api.get('/data/2.5/weather', {
        params: {
          q: city,
        },
      });

      dispatch(setTemp(data?.main || null));
      dispatch(setWind(data?.wind || null));
      dispatch(setClouds(data?.clouds || null));

      dispatch(setCity(null));
    } catch (error: any) {
      if (error?.response?.status === 404) {
        dispatch(setErrorMessage(`Cidade "${city}" não encontrada`));
      } else {
        dispatch(setErrorMessage(`Erro ao procurar`));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (city !== null) {
      getWeather();
    }
  }, [city]);

  return (
    <>
      <GeolocationModal />

      <PageGrid>
        <Grid item xs={5}>
          <ContainerInput>
            <CitiesAutocomplete />
          </ContainerInput>
        </Grid>

        <Grid item xs={7}>
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
