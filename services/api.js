import data from '../airports.json';
import data2 from '../epa-cor.json';
import data3 from '../epa-mdz.json';

export const getAirports = () => {
  return new Promise(resolve => setTimeout(resolve, 1000, data));
};

export const getFlights = (origin, destination) => {
  const flights = [...data2.flights, ...data3.flights];
  const inbound = flights.filter(
    e => e.origin === origin && e.destination === destination
  );
  const outbound = flights.filter(
    e => e.origin === destination && e.destination === origin
  );
  return {
    inbound,
    outbound
  };
};
