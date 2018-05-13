import word from './word'

describe('word reducer', () => {
  const reducer = word
  //const initialState = []

  it('returns an empty string for the initial state', () => {
    console.log(reducer());
    expect(reducer()).toEqual('')
  })
})
