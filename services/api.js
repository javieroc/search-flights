import data from '../airports.json';

export const getAirports = () => {
  return new Promise(resolve => setTimeout(resolve, 1000, data));
};
