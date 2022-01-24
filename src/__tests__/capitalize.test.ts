import { capitalize } from "../lib/capitalize";

const testWords = [
    {lowerCase: "test", capitalized: 'Test'},
    {lowerCase: "hello", capitalized: 'Hello'},
    {lowerCase: "world", capitalized: 'World'},
    {lowerCase: "amsterdam", capitalized: 'Amsterdam'}
];

it('Capitalizes words', () => {
    expect(capitalize(testWords[0].lowerCase)).toEqual(testWords[0].capitalized);
    expect(capitalize(testWords[1].lowerCase)).toEqual(testWords[1].capitalized);
    expect(capitalize(testWords[2].lowerCase)).toEqual(testWords[2].capitalized);
    expect(capitalize(testWords[3].lowerCase)).toEqual(testWords[3].capitalized);
});

export {};
