import { formIsValid } from "../lib/formIsValid";
import { FormDataArray } from "../lib/types/formDataArray";

const formDataValid = [
    {key: "object", value: "test"},
    {key: "locatie", value: "test"},
    {key: "beschrijving", value: "test"},
    {key: "urgentie", value: "4"},
    {key: "toelichting", value: "test"},
    {key: "bestanden", value: {
            path: "14022058.png",
            tmpId: 1,
            progress: 100,
            response: ""}
        },
    {key: "type", value: "3"}
];

const formDataInvalid = [
    {key: "object", value: ""},
    {key: "locatie", value: "test"},
    {key: "beschrijving", value: "test"},
    {key: "urgentie", value: "4"},
    {key: "toelichting", value: ""},
    {key: "bestanden", value: {
            path: "14022058.png",
            tmpId: 1,
            progress: 100,
            response: ""}
    },
    {key: "type", value: "3"}
];

it('Capitalizes words', () => {
    expect(formIsValid(formDataValid as FormDataArray)).toBe(true);
    expect(formIsValid(formDataInvalid as FormDataArray)).toBe(false);
});

export {};
