import React from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

import { Container, ContainerInfo } from './styles';

const Weather: React.FC = () => {
  const { temp, tempType, clouds } = useSelector(
    (state: ReduxState) => state.city,
  );

  const handleTempType = (value: number) => {
    if (tempType === 'Celsius') {
      return kelvinToCelsius(temp?.temp);
    }

    if (tempType === 'Fahrenheit') {
      return kelvinToFahrenheit(temp?.temp);
    }

    return value;
  };

  return (
    <Container>
      <ContainerInfo>
        <span>Maxima</span>
        <span>
          {temp?.temp_max && handleTempType(temp?.temp_max)} °{tempType[0]}
        </span>
      </ContainerInfo>

      <ContainerInfo>
        <span>Minima</span>
        <span>
          {temp?.temp_min && handleTempType(temp?.temp_min)} °{tempType[0]}
        </span>
      </ContainerInfo>

      <ContainerInfo>
        <span>Nebulosidade</span>
        <span>{clouds?.all} %</span>
      </ContainerInfo>

      <ContainerInfo>
        <span>Sensação Termica</span>
        <span>
          {temp?.feels_like && handleTempType(temp?.feels_like)} °{tempType[0]}
        </span>
      </ContainerInfo>
    </Container>
  );
};

export default Weather;
