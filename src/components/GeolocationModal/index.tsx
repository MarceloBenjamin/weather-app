import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setAllowed, setError } from '@ducks/geolocation';
import {
  setTemp,
  setWind,
  setClouds,
  setCity,
  setCityName,
  setLatitude,
  setLongetude,
  setDescription,
  setIconId,
  setLoading,
} from '@ducks/city';

import api from '@api';

import { Fade } from '@mui/material';

import {
  ModalStyled,
  Container,
  Title,
  ContainerButtons,
  PermissionButton,
} from './styles';

const GeolocationModal: React.FC = () => {
  const dispatch = useDispatch();
  const { allowed } = useSelector((state: ReduxState) => state.geolocation);

  const [show, setShow] = useState(false);

  // eslint-disable-next-line no-undef
  const getCityWeather = async (location: GeolocationPosition) => {
    dispatch(setLoading(true));
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
      dispatch(setLatitude(data?.coord?.lat || 0));
      dispatch(setLongetude(data?.coord?.lon || 0));
      dispatch(setCityName(data?.name || ''));
      dispatch(setDescription(data?.weather[0]?.description || ''));
      dispatch(setIconId(data?.weather[0]?.icon || ''));

      dispatch(setCity(null));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // eslint-disable-next-line no-undef
  const geolocationError = (error: GeolocationPositionError) => {
    dispatch(setError(error.code));
  };

  const getLocation = () => {
    dispatch(setError(null));

    navigator.geolocation.getCurrentPosition(getCityWeather, geolocationError);

    setShow(false);
  };

  useEffect(() => {
    if (allowed) {
      getLocation();
    }

    if (allowed === null) {
      setTimeout(() => setShow(true), 1000);
    }
  }, [allowed]);

  return (
    <ModalStyled
      open={show}
      onClose={() => setShow(false)}
      closeAfterTransition
      BackdropProps={{ style: { background: 'rgba(0,0,0,0.1)' } }}
    >
      <Fade in={show} timeout={700}>
        <Container>
          <Title color="primary">
            Deseja saber o clima da sua localização atual?
          </Title>

          <ContainerButtons>
            <PermissionButton
              type="button"
              variant="outlined"
              onClick={() => {
                dispatch(setAllowed(false));
                setShow(false);
              }}
            >
              Não
            </PermissionButton>

            <PermissionButton
              type="button"
              variant="outlined"
              onClick={() => {
                dispatch(setAllowed(true));
              }}
              style={{ marginLeft: 15 }}
            >
              Sim
            </PermissionButton>
          </ContainerButtons>
        </Container>
      </Fade>
    </ModalStyled>
  );
};

export default GeolocationModal;
