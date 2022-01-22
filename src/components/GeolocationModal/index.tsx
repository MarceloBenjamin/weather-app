import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setLat, setLon, setAllowed, setError } from '@ducks/geolocation';
import { setTemp, setWind, setClouds, setCity } from '@ducks/city';

import api from '@api';

import { Fade } from '@mui/material';

import { ModalStyled, Container } from './styles';

const GeolocationModal: React.FC = () => {
  const dispatch = useDispatch();
  const { allowed } = useSelector((state: ReduxState) => state.geolocation);

  const [show, setShow] = useState(false);

  // eslint-disable-next-line no-undef
  const getCityWeather = async (location: GeolocationPosition) => {
    try {
      const { data } = await api.get('/data/2.5/weather', {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        },
      });

      dispatch(setTemp(data?.main || null));
      dispatch(setWind(data?.wind || null));
      dispatch(setClouds(data?.clouds || null));

      dispatch(setCity(null));
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line no-undef
  const geolocationError = (error: GeolocationPositionError) => {
    if (error.code === error.PERMISSION_DENIED) {
      dispatch(
        setError(
          'Permissão não concedida, acesse o link para ajustar a permissão',
        ),
      );
      // https://support.google.com/chrome/answer/142065?hl=pt-BR&co=GENIE.Platform%3DDesktop
    }

    if (error.code === error.POSITION_UNAVAILABLE) {
      dispatch(setError('As informações de localização não estão disponíveis'));
    }

    if (error.code === error.TIMEOUT) {
      dispatch(
        setError('A solicitação para obter a localização do usuário expirou'),
      );
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(getCityWeather, geolocationError);

    setShow(false);
  };

  useEffect(() => {
    if (allowed) {
      getLocation();
    }

    if (allowed === false) {
      console.log(false);
    }

    if (allowed === null) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  return (
    <ModalStyled
      open={show}
      onClose={() => setShow(false)}
      closeAfterTransition
    >
      <Fade in={show} timeout={300}>
        <Container>
          <span>Deseja obter a localização?</span>

          <button
            type="button"
            onClick={() => {
              dispatch(setAllowed(false));
              setShow(false);
            }}
          >
            Não
          </button>

          <button
            type="button"
            onClick={() => {
              dispatch(setAllowed(true));
              getLocation();
            }}
          >
            Sim
          </button>
        </Container>
      </Fade>
    </ModalStyled>
  );
};

export default GeolocationModal;
