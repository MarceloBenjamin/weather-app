/* eslint-disable radix */
import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

export const handleTempType = (type: string, value: number) => {
  if (type === 'Celsius') {
    return parseInt(`${kelvinToCelsius(value)}`);
  }

  if (type === 'Fahrenheit') {
    return parseInt(`${kelvinToFahrenheit(value)}`);
  }

  return parseInt(`${value}`);
};
