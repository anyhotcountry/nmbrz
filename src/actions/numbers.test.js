import { shuffleNumbers } from './numbers';

describe('numbers actions', () => {
  it('should handle shuffleNumbers', () => {
    const first = shuffleNumbers();
    const second = shuffleNumbers();
    expect(
      first
    ).not.toEqual({
      second
    })
  })
})