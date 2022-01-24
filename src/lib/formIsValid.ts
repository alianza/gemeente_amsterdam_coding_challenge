import { FormDataArray } from "./types/formDataArray";

export const formIsValid = (formData: FormDataArray) => {
    let isValid = true;

    formData.forEach(({ value, key}) => {
        if (value === '') {
            isValid = false;
            setInvalid(key);
        }


        if (key === 'bestanden') {
            if ((value as File).size === 0) {
                isValid = false;
                setInvalid(key);
            }
        }

        if (key === 'type') {
            if (value === '1') {
                isValid = false;
                setInvalid(key);
            }
        }
    });

    if (isValid) {
        document.querySelectorAll(".invalid").forEach(element => {
            element.classList.remove('invalid');
        });
    }

    return isValid;
}

const setInvalid = (key: string) => {
    document.getElementById(key)?.classList.add('invalid');
}
