/* eslint-disable radix */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setTempType } from '@ducks/city';

import { Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';

import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import miToKm from 'mi-to-km';

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
} from './styles';

const Weather: React.FC = () => {
  const dispatch = useDispatch();
  const { temp, tempType, wind } = useSelector(
    (state: ReduxState) => state.city,
  );

  const tempOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setTempType(e.target.value));
  };

  const handleTempType = (value: number) => {
    if (tempType === 'Celsius') {
      return parseInt(`${kelvinToCelsius(value)}`);
    }

    if (tempType === 'Fahrenheit') {
      return parseInt(`${kelvinToFahrenheit(value)}`);
    }

    return parseInt(`${value}`);
  };

  const handleKmValue = (value: number) => {
    let aux = miToKm(value);
    aux = parseInt(`${aux}`);
    return aux;
  };

  return (
    <Container>
      <ContainerTop>
        <UpdateButton variant="outlined">Atualizar</UpdateButton>

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
      </ContainerTop>

      <ContainerInfo>
        <ContainerDetails>
          <Title>Brasília</Title>

          <Subtitle>Nublado</Subtitle>

          <ContainerWind>
            <span>
              Velocidade do vento:{' '}
              {wind?.speed ? handleKmValue(wind?.speed) : 0} km/h
            </span>
            {/* <span>Graus: {wind?.deg}°</span> */}
            <span>Umidade: {temp?.humidity}%</span>
            <span>Pressão: {temp?.pressure} hPa</span>
          </ContainerWind>
        </ContainerDetails>

        <ContainerTemp>
          <ContainerValues>
            <TempValue>{`${handleTempType(temp?.temp || 0)}`}</TempValue>
            <TempType>{`°${tempType[0]}`}</TempType>
          </ContainerValues>
          {/* <span>
            {temp?.temp && `${handleTempType(temp?.temp)} °${tempType[0]}`}
          </span> */}
        </ContainerTemp>
      </ContainerInfo>
    </Container>
  );
};

export default Weather;
