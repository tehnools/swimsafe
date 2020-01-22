import locationsReducer from '../../../redux/reducers/locations';
import { LIST_LOCATIONS_SUCCESS } from '../../../redux/actions/data';

const initialState = [];
const mockData = [
  { id: 1, name: 'North Piha Beach' }
];

it('should evaluate to true', () => {
  expect(true).toBe(true);
});

describe('Locations Reducer', () => {
  it('should handle listing location sucesss', () => {
    const action = { type: LIST_LOCATIONS_SUCCESS, locations: [...mockData] };
    const expected = [...mockData];
    const assert = locationsReducer(initialState, action);
    expect(assert).toEqual(expected);
  });
});
