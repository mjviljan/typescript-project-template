type ExampleType = [string, number]

interface ExampleInterface {
    name: string
    age: number
}

class ExampleClass implements ExampleInterface {
    constructor(public name: string, public age: number) {}
}

const func = (item: ExampleClass): ExampleType => [item.name, item.age]

console.log(func(new ExampleClass('Hubba Hubba', 25)))
