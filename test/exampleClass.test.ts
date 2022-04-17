import { ExampleClass, func } from '../src/exampleClass'

describe('ExampleClass', () => {
    it('returns the internal variables of the class in an array from external func function', () => {
        const name = 'Hubba Hubba'
        const age = 25

        const example = new ExampleClass(name, age)
        const expected = [name, age]

        expect(func(example)).toEqual(expected)
    })
})
