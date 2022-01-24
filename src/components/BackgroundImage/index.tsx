import React, { useEffect, useState } from 'react';

import { Fade } from '@mui/material';

import cloudsWebp from '@assets/images/cloudsTiny.webp';
import cloudsPng from '@assets/images/clouds.png';

import { Container, Img, Source } from './styles';

const BackgroundImage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <Container>
      <Fade in={show} timeout={2000}>
        <picture style={{ width: '100%', height: '100%' }}>
          <Source srcSet={cloudsWebp} type="image/webp" />
          <Img src={cloudsPng} alt="Imagem de fundo" />
        </picture>
      </Fade>
    </Container>
  );
};

export default BackgroundImage;
