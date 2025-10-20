const { countCharacterFrequency } = require('../question-2')

describe('countCharacterFrequency', () => {
  test('counts characters in "Hello world!"', () => {
    expect(countCharacterFrequency('Hello world!')).toEqual({
      H: 1,
      e: 1,
      l: 3,
      o: 2,
      ' ': 1,
      w: 1,
      r: 1,
      d: 1,
      '!': 1,
    })
  })

  test('counts repeated single character', () => {
    expect(countCharacterFrequency('aaa')).toEqual({ a: 3 })
  })

  test('returns empty object for empty string', () => {
    expect(countCharacterFrequency('')).toEqual({})
  })

  test('is case sensitive', () => {
    expect(countCharacterFrequency('Aa')).toEqual({ A: 1, a: 1 })
  })

  test('throws on non-string input', () => {
    expect(() => countCharacterFrequency(null)).toThrow(TypeError)
    expect(() => countCharacterFrequency(123)).toThrow(TypeError)
  })
})
