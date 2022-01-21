import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

import { Container, ContainerTemp, ContainerWind } from './styles';

const Temp: React.FC = () => {
  const { temp, wind } = useSelector((state: ReduxState) => state.city);

  const [temperature, setTemperature] = useState(temp?.temp);

  const tempOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];

  const [tempType, setTempType] = useState('Celsius');

  const handleChange = (e: SelectChangeEvent) => {
    setTempType(e.target.value);
  };

  const handleTempType = () => {
    if (!temp) return;

    if (tempType === 'Celsius') {
      setTemperature(kelvinToCelsius(temp.temp));
    } else if (tempType === 'Fahrenheit') {
      setTemperature(kelvinToFahrenheit(temp.temp));
    } else {
      setTemperature(temp.temp);
    }
  };

  useEffect(() => {
    handleTempType();
  }, [tempType, temp]);

  return (
    <Container>
      <ContainerWind>
        <span>{wind?.speed} miles/hour</span>
        <span>{wind?.deg} °</span>
        <span>{temp?.humidity} %</span>
        <span>{temp?.pressure} hPa</span>
      </ContainerWind>

      <ContainerTemp>
        <Select value={tempType} onChange={handleChange}>
          {tempOptions.map((tempValue: string) => (
            <MenuItem key={tempValue} value={tempValue}>
              {tempValue}
            </MenuItem>
          ))}
        </Select>

        <span>{`${temperature} °${tempType[0]}`}</span>
      </ContainerTemp>
    </Container>
  );
};

export default Temp;
