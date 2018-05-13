import guesses from './guesses'

describe('guesses reducer', () => {
  const reducer = guesses
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
