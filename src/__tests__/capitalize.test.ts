import { capitalize } from "../lib/capitalize";

const testWords = [
    {lowerCase: "test", capitalized: 'Test'},
    {lowerCase: "hello", capitalized: 'Hello'},
    {lowerCase: "world", capitalized: 'World'},
    {lowerCase: "amsterdam", capitalized: 'Amsterdam'}
];

it('Capitalizes words', () => {
    testWords.forEach(word => {
        expect(capitalize(word.lowerCase)).toEqual(word.capitalized);
    });
});

export {};
