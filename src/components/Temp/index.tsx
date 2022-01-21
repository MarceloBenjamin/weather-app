import React from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { Container } from './styles';

const Temp: React.FC = () => {
  const { temp } = useSelector((state: ReduxState) => state.city);

  return (
    <Container>
      <span>{temp?.temp}</span>
    </Container>
  );
};

export default Temp;
