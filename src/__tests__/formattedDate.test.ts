import { getFormattedDate } from "../lib/getFormattedDate";

const date = new Date(1588121600000);
const expectedString = "29 april 2020 02:53";

it('Formats date', () => {
    expect(getFormattedDate(date)).toEqual(expectedString);
});

export {};
