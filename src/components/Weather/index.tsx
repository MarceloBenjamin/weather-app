import React from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { Container, ContainerInfo } from './styles';

const Weather: React.FC = () => {
  const { temp, clouds } = useSelector((state: ReduxState) => state.city);

  return (
    <Container>
      <ContainerInfo>
        <span>Maxima</span>
        <span>{temp?.temp_max}</span>
      </ContainerInfo>

      <ContainerInfo>
        <span>Minima</span>
        <span>{temp?.temp_min}</span>
      </ContainerInfo>

      <ContainerInfo>
        <span>Nebulosidade</span>
        <span>{clouds?.all}</span>
      </ContainerInfo>

      <ContainerInfo>
        <span>Sensação Termica</span>
        <span>{temp?.feels_like}</span>
      </ContainerInfo>
    </Container>
  );
};

export default Weather;
