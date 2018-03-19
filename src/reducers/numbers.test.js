import numbers from './numbers';

describe('numbers reducer', () => {
  it('should handle initial state', () => {
    expect(
      numbers(undefined, {}).history.present
    ).toHaveLength(20)
  })

  it('should handle SHUFFLE_NUMBERS', () => {
    expect(
      numbers([{ i: 1 }, { i: 2 }, { i: 3 }, { i: 4 }], {
        type: 'SHUFFLE_NUMBERS',
        sequence: [1, 0, 3, 2]
      }).history.present
    ).toEqual([
      { i: 1, active: true, },
      { i: 0 },
      { i: 3 },
      { i: 2 }
    ])
  })
})