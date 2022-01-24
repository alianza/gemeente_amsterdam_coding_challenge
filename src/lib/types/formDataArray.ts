export type FormDataArray = {
    key: string;
    value: FormDataEntryValue;
}[];

// export type FormDataArray = [
//     ObjectItem,
//     LocatieItem,
//     BeschrijvingItem,
//     UrgentieItem,
//     ToelichtingItem,
//     BestandenItem,
//     TypeItem
// ]

type ObjectItem = {
    key: "object";
    value: string;
};

type LocatieItem = {
    key: "locatie";
    value: string;
};

type BeschrijvingItem = {
    key: "beschrijving";
    value: string;
};

type UrgentieItem = {
    key: "urgentie";
    value: string;
};

type ToelichtingItem = {
    key: "toelichting";
    value: string;
};

type BestandenItem = {
    key: "bestanden";
    value: File;
};

type TypeItem = {
    key: "type";
    value: string;
};
