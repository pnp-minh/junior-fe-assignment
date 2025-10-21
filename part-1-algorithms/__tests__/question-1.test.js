const { reverseArray } = require('../question-1')

describe('reverseArray', () => {
  test('reverses a typical array of strings', () => {
    expect(reverseArray(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a'])
  })

  test('reverses a numeric array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  })

  test('returns same single-element array', () => {
    expect(reverseArray(['single'])).toEqual(['single'])
  })

  test('returns empty array unchanged', () => {
    expect(reverseArray([])).toEqual([])
  })

  test('throws on non-array input', () => {
    expect(() => reverseArray(null)).toThrow(TypeError)
    expect(() => reverseArray({})).toThrow(TypeError)
  })
})
