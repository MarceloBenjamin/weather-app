/* eslint-disable radix */
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

import { Grow, useTheme } from '@mui/material';

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
  const theme = useTheme();

  const { temp, tempType, clouds } = useSelector(
    (state: ReduxState) => state.city,
  );

  const handleTempType = (value: number) => {
    if (tempType === 'Celsius') {
      return parseInt(`${kelvinToCelsius(value)}`);
    }

    if (tempType === 'Fahrenheit') {
      return parseInt(`${kelvinToFahrenheit(value)}`);
    }

    return parseInt(`${value}`);
  };

  const [values, setValues] = useState<any>([]);

  const saveValues = () => {
    const aux = [
      {
        path: mdiThermometerPlus,
        title: 'Máxima',
        value: temp?.temp_max,
        type: `°${tempType[0]}`,
      },
      {
        path: mdiThermometerMinus,
        title: 'Mínima',
        value: temp?.temp_min || 0,
        type: `°${tempType[0]}`,
      },
      {
        path: mdiThermometerLines,
        title: 'Sensação Térmica',
        value: temp?.feels_like || 0,
        type: `°${tempType[0]}`,
      },
      {
        path: mdiWeatherFog,
        title: 'Nebulosidade',
        value: clouds?.all || 0,
        type: `%`,
      },
    ];

    setValues([...aux]);
  };

  useEffect(() => {
    if (temp) {
      saveValues();
    }
  }, [temp?.temp_max, temp?.temp_min, temp?.feels_like, clouds?.all, tempType]);

  return (
    <Container>
      {values.map((item: any, index: number) => (
        <Grow key={item.title} in timeout={index * 500}>
          <ContainerInfo key={item.title}>
            <ContainerTitle>
              <Icon
                color={theme.palette.secondary.main}
                size={2}
                path={item.path}
              />
            </ContainerTitle>

            <ContainerValue>
              <BoxValue>
                <TempValue color="primary">
                  {item.title === 'Nebulosidade'
                    ? item.value
                    : handleTempType(item.value)}
                </TempValue>
                <TempType color="secondary">{item.type}</TempType>
              </BoxValue>
            </ContainerValue>

            <ContainerTitle>
              <Title color="primary">{item.title}</Title>
            </ContainerTitle>
          </ContainerInfo>
        </Grow>
      ))}
    </Container>
  );
};

export default WeatherInfo;
