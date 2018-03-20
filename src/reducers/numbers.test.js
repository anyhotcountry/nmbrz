import { numbers } from './numbers';

describe('numbers reducer', () => {
  it('should handle initial state', () => {
    expect(
      numbers(undefined, {})
    ).toHaveLength(20)
  })

  it('should handle SHUFFLE_NUMBERS', () => {
    expect(
      numbers([{ i: 0 }, { i: 1 }, { i: 2 }, { i: 3 }], {
        type: 'SHUFFLE_NUMBERS',
        sequence: [1, 0, 3, 2]
      })
    ).toEqual([
      {
        "active": true,
        "destination": { "x": 0, "y": 0 },
        "key": 1,
        "name": "nmbr0",
        "placed": false,
        "rotation": 0
      },
      {
        "active": false,
        "destination": { "x": 0, "y": 0 },
        "key": 0,
        "name": "nmbr0",
        "placed": false,
        "rotation": 0
      },
      {
        "active": false,
        "destination": { "x": 0, "y": 0 },
        "key": 3,
        "name": "nmbr1",
        "placed": false,
        "rotation": 0
      },
      {
        "active": false,
        "destination": { "x": 0, "y": 0 },
        "key": 2,
        "name": "nmbr1",
        "placed": false,
        "rotation": 0
      }])
  })
})