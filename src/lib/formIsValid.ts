import { FormDataArray } from "./types/formDataArray";

export const formIsValid = (formData: FormDataArray) => {
    let isValid = true;

    formData.forEach(({ value, key}) => {
        if (value === '') {
            isValid = false;
        }

        if (key === 'bestanden') {
            if ((value as File).size === 0) {
                isValid = false;
            }
        }
    });

    return isValid;
}
