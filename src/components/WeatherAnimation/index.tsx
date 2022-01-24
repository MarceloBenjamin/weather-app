import React from 'react';

import Lottie from 'react-lottie';

import { Fade } from '@mui/material';

import clearSky from '@assets/weatherAnimations/clear_sky.json';
import fewClounds from '@assets/weatherAnimations/few_clounds.json';
import brokenClouds from '@assets/weatherAnimations/broken_clouds.json';
import mist from '@assets/weatherAnimations/mist.json';
import rain from '@assets/weatherAnimations/rain.json';
import showerRain from '@assets/weatherAnimations/shower_rain.json';
import scatteredClouds from '@assets/weatherAnimations/scattered_clouds.json';
import snow from '@assets/weatherAnimations/snow.json';
import thunderstorm from '@assets/weatherAnimations/thunderstorm.json';

import { Container, Shadow } from './styles';

interface Props {
  icon: string;
}

const WeatherAnimation: React.FC<Props> = ({ icon }: Props) => {
  const getIconById = (value: string) => {
    if (value === '01d' || value === '01n') {
      return clearSky;
    }

    if (value === '02d' || value === '02n') {
      return fewClounds;
    }

    if (value === '03d' || value === '03n') {
      return scatteredClouds;
    }

    if (value === '04d' || value === '04n') {
      return brokenClouds;
    }

    if (value === '09d' || value === '09n') {
      return showerRain;
    }

    if (value === '10d' || value === '10n') {
      return rain;
    }

    if (value === '11d' || value === '11n') {
      return thunderstorm;
    }

    if (value === '13d' || value === '13n') {
      return snow;
    }

    if (value === '50d' || value === '50n') {
      return mist;
    }

    return clearSky;
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Fade in timeout={1000}>
      <Container>
        <Shadow />

        <Lottie
          options={{
            ...lottieOptions,
            animationData: getIconById(icon),
          }}
          height={80}
          width={80}
        />
      </Container>
    </Fade>
  );
};

export default WeatherAnimation;
