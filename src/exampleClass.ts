type ExampleType = [string, number]

interface ExampleInterface {
    name: string
    age: number
}

export class ExampleClass implements ExampleInterface {
    constructor(public name: string, public age: number) {}
}

export const func = (item: ExampleClass): ExampleType => [item.name, item.age]
