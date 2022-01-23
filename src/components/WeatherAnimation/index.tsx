import React from 'react';

import Lottie from 'react-lottie';

import clearSky from '@assets/weatherAnimations/clear_sky.json';
import fewClounds from '@assets/weatherAnimations/few_clounds.json';
import brokenClouds from '@assets/weatherAnimations/broken_clouds.json';
import mist from '@assets/weatherAnimations/mist.json';
import rain from '@assets/weatherAnimations/rain.json';
import showerRain from '@assets/weatherAnimations/shower_rain.json';
import scatteredClouds from '@assets/weatherAnimations/scattered_clouds.json';
import snow from '@assets/weatherAnimations/snow.json';
import thunderstorm from '@assets/weatherAnimations/thunderstorm.json';

interface Props {
  icon: string;
}

const WeatherAnimation: React.FC<Props> = ({ icon }: Props) => {
  const getIconById = (value: string) => {
    switch (value) {
      case '01d' || '01n':
        return clearSky;

      case '02d' || '02n':
        return fewClounds;

      case '03d' || '03n':
        return scatteredClouds;

      case '04d' || '04n':
        return brokenClouds;

      case '09d' || '09n':
        return showerRain;

      case '10d' || '10n':
        return rain;

      case '11d' || '11n':
        return thunderstorm;

      case '13d' || '13n':
        return snow;

      case '50d' || '50n':
        return mist;

      default:
        return clearSky;
    }
  };

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: getIconById(icon),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={80}
      width={80}
    />
  );
};

export default WeatherAnimation;
