/* eslint-disable radix */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setTempType, setUpdate } from '@ducks/city';

import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Fade,
  Grow,
  useTheme,
} from '@mui/material';

import { handleTempType } from '@utils';
import miToKm from 'mi-to-km';

import WeatherAnimation from '@components/WeatherAnimation';

import {
  Container,
  ContainerTop,
  UpdateButton,
  ContainerInfo,
  ContainerDetails,
  Subtitle,
  Title,
  ContainerWind,
  ContainerTemp,
  ContainerValues,
  TempValue,
  TempType,
  ContainerAnimation,
  Text,
} from './styles';

const Weather: React.FC = () => {
  const dispatch = useDispatch();
  const { temp, tempType, wind, cityName, description, iconId, loading } =
    useSelector((state: ReduxState) => state.city);

  const tempOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setTempType(e.target.value));
  };

  const handleKmValue = (value: number) => {
    let aux = miToKm(value);
    aux = parseInt(`${aux}`);
    return aux;
  };

  const handleUpdate = () => {
    dispatch(setUpdate(true));
  };

  return (
    <Container>
      <ContainerTop>
        <Grow in={Boolean(temp)} timeout={700}>
          <UpdateButton
            disabled={loading}
            variant="outlined"
            onClick={handleUpdate}
          >
            Atualizar
          </UpdateButton>
        </Grow>

        <Grow in={Boolean(temp)} timeout={1100}>
          <Select
            value={tempType}
            onChange={handleChange}
            inputProps={{ style: { width: '90px !important' } }}
          >
            {tempOptions.map((tempValue: string) => (
              <MenuItem key={tempValue} value={tempValue}>
                {tempValue}
              </MenuItem>
            ))}
          </Select>
        </Grow>
      </ContainerTop>

      <ContainerInfo>
        <Fade in={Boolean(temp)}>
          <ContainerDetails>
            <Title color="primary">{cityName}</Title>

            <Subtitle color="primary">{description}</Subtitle>

            <ContainerWind>
              <Text color="primary">
                Velocidade do vento:{' '}
                {wind?.speed ? handleKmValue(wind?.speed) : 0} km/h
              </Text>
              <Text color="primary">Umidade: {temp?.humidity}%</Text>
              <Text color="primary">Pressão: {temp?.pressure} hPa</Text>
            </ContainerWind>
          </ContainerDetails>
        </Fade>

        <Fade in={Boolean(temp?.temp && iconId)}>
          <ContainerTemp>
            <ContainerValues>
              <TempValue color="primary">{`${handleTempType(
                tempType,
                temp?.temp || 0,
              )}`}</TempValue>
              <TempType color="secondary">{`°${tempType[0]}`}</TempType>
            </ContainerValues>

            <ContainerAnimation>
              <WeatherAnimation icon={iconId} />
            </ContainerAnimation>
          </ContainerTemp>
        </Fade>
      </ContainerInfo>
    </Container>
  );
};

export default Weather;
