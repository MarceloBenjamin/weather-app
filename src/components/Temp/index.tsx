import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@ducks';

import { setTempType } from '@ducks/city';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

import { Container, ContainerTemp, ContainerWind } from './styles';

const Temp: React.FC = () => {
  const dispatch = useDispatch();
  const { temp, tempType, wind } = useSelector(
    (state: ReduxState) => state.city,
  );

  const [temperature, setTemperature] = useState(temp?.temp);

  const tempOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setTempType(e.target.value));
  };

  const handleTempType = (value: number) => {
    if (tempType === 'Celsius') {
      return kelvinToCelsius(value);
    }

    if (tempType === 'Fahrenheit') {
      return kelvinToFahrenheit(value);
    }

    return value;
  };

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

        <span>
          {temp?.temp && `${handleTempType(temp?.temp)} °${tempType[0]}`}
        </span>
      </ContainerTemp>
    </Container>
  );
};

export default Temp;
