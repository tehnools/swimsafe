import {
  getLocation,
  getLocations,
  getAlerts,
  errorReceived,
  pending,
  getDataSucess,
  LIST_LOCATIONS_PENDING,
  LIST_LOCATIONS_SUCCESS,
  GET_LOCATION_PENDING,
  GET_LOCATION_SUCCESS,
  GET_ALERTS_PENDING,
  GET_ALERTS_SUCCESS,
  ERROR_RECEIVED
} from '../../../redux/actions/data';

it('should evaluate to true', () => {
  expect(true).toBe(true);
});

describe('General Data Actions', () => {
  it('should be able to return data', () => {
    const expected = { type: GET_LOCATION_SUCCESS, test: true };
    const data = { data: true };
    const assert = getDataSucess(GET_LOCATION_SUCCESS, 'test', data);

    expect(assert).toEqual(expected);
  });

  it('should be able to return pending', () => {
    const expected = { type: GET_LOCATION_PENDING };
    const assert = pending(GET_LOCATION_PENDING);
    expect(assert).toEqual(expected);
  });

  it('should be able to return error', () => {
    const expected = { type: ERROR_RECEIVED, error: new Error({ message: 'test' }) };
    const data = new Error({ message: 'test' });
    const assert = errorReceived(data);
    expect(assert).toEqual(expected);
  });
});
