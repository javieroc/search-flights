import data from '../airports.json';

export const getAirports = filter => {
  return new Promise(resolve =>
    setTimeout(() => {
      const dataFiltered = data.filter(e =>
        ''
          .concat(e.name, e.city, e.country, e.code)
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      );
      resolve(dataFiltered);
    }, 1000)
  );
};
