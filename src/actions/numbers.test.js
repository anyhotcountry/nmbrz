import { shuffleNumbers } from './numbers';

describe('numbers actions', () => {
  it('should handle shuffleNumbers', () => {
    expect(
      shuffleNumbers()
    ).toEqual({
      sequence: [10, 19, 11, 0, 12, 2, 13, 4, 14, 6, 8, 18, 17, 16, 15, 9, 7, 5, 3, 1], 
      type: "SHUFFLE_NUMBERS"
    })
  })
})