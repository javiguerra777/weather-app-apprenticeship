import getLocation, { getWeatherData } from './api';

describe('testing geocoder api location', () => {
  test('geocoder api testing', async () => {
    const input = 'Stockton, CA';
    const returnVal = await getLocation(input);
    expect(returnVal.data[0].lat).toEqual('37.9577016');
  });
});

describe('test weather api', () => {
  test('using weather api function', async () => {
    const lat = 37.9577016;
    const lon = -121.2907796;
    const returnVal = await getWeatherData(lat, lon);
    expect(returnVal.data.current.temp).toEqual(82.99);
  });
});
