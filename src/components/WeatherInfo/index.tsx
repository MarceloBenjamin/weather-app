/* eslint-disable radix */
import React from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

import { Grow } from '@mui/material';

import Icon from '@mdi/react';
import {
  mdiThermometerMinus,
  mdiThermometerPlus,
  mdiWeatherFog,
  mdiThermometerLines,
} from '@mdi/js';

import {
  Container,
  ContainerInfo,
  ContainerTitle,
  Title,
  ContainerValue,
  BoxValue,
  TempValue,
  TempType,
} from './styles';

const WeatherInfo: React.FC = () => {
  const { temp, tempType, clouds } = useSelector(
    (state: ReduxState) => state.city,
  );

  const handleTempType = (value: number) => {
    if (tempType === 'Celsius') {
      return parseInt(`${kelvinToCelsius(temp?.temp)}`);
    }

    if (tempType === 'Fahrenheit') {
      return parseInt(`${kelvinToFahrenheit(temp?.temp)}`);
    }

    return parseInt(`${value}`);
  };

  const values = [
    {
      path: mdiThermometerPlus,
      title: 'Máxima',
      value: handleTempType(temp?.temp_max || 0),
      type: `°${tempType[0]}`,
    },
    {
      path: mdiThermometerMinus,
      title: 'Mínima',
      value: handleTempType(temp?.temp_min || 0),
      type: `°${tempType[0]}`,
    },
    {
      path: mdiThermometerLines,
      title: 'Sensação Térmica',
      value: handleTempType(temp?.feels_like || 0),
      type: `°${tempType[0]}`,
    },
    {
      path: mdiWeatherFog,
      title: 'Nebulosidade',
      value: clouds?.all || 0,
      type: `%`,
    },
  ];

  return (
    <Container>
      {values.map((item: any, index: number) => (
        <Grow key={item.title} in timeout={index * 500}>
          <ContainerInfo key={item.title}>
            <ContainerTitle>
              <Icon color="#7c7c7c" size={2} path={item.path} />
            </ContainerTitle>

            <ContainerValue>
              <BoxValue>
                <TempValue>{item.value}</TempValue>
                <TempType>{item.type}</TempType>
              </BoxValue>
            </ContainerValue>

            <ContainerTitle>
              <Title>{item.title}</Title>
            </ContainerTitle>
          </ContainerInfo>
        </Grow>
      ))}
    </Container>
  );
};

export default WeatherInfo;
