import React, { useEffect, useState } from 'react';

import { Fade } from '@mui/material';

import { ModalStyled, Container } from './styles';

const GeolocationModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((location: any) => {
      console.log(location);
    });

    setShow(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <ModalStyled
      open={show}
      onClose={() => setShow(false)}
      closeAfterTransition
    >
      <Fade in={show} timeout={300}>
        <Container>
          <span>aqui</span>

          <button type="button" onClick={() => setShow(false)}>
            Não
          </button>
          <button type="button" onClick={getLocation}>
            Sim
          </button>
        </Container>
      </Fade>
    </ModalStyled>
  );
};

export default GeolocationModal;
