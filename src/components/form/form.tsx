import { Accordion, Button, Icon, Label, Link, Paragraph, Select, TextArea, TextField } from "@amsterdam/asc-ui";
import React, { FC, useEffect } from "react";
import styles from "./form.module.scss";
import { FileUpload } from "@amsterdam/bmi-component-library";
import { Enlarge } from "@amsterdam/asc-assets";
import { Melding } from "../../lib/types/melding";
import { FormDataArray } from "../../lib/types/formDataArray";
import { formIsValid } from "../../lib/formIsValid";
import { getFormattedDate } from "../../lib/getFormattedDate";
import { urgentie } from "../../lib/urgentie";
import { type } from "../../lib/type";

const postUrl = "localhost:3000"

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

interface FormProps {
    melding: Melding;
    onSubmit: (formData: FormDataArray) => void;
}

const Form: FC<FormProps> = ({melding, onSubmit}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formDataArray: FormDataArray = [];
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        formData.forEach((value, key) => { formDataArray.push({key, value}); });
        if (formIsValid(formDataArray)) {
            onSubmit(formDataArray);
            setIsOpen(false);
            form.reset();
        }
    };

    const handleBackButton = () => {
        setIsOpen(false);
    }

    useEffect(() => { // Set form elements names to be used with FormData()
        document.getElementById("urgentie")?.setAttribute("name", "urgentie");
        document.getElementById("type")?.setAttribute("name", "type");
        document.querySelector("#bestanden div input")?.setAttribute("name", "bestanden");
    }, [])

    return (
        <Accordion id="accordion" title="Melding: BRU0016 - Melkmeisjesbrug" isOpen={isOpen} onToggle={(open: boolean) => setIsOpen(open)}>
            <form id="form" onSubmit={handleFormSubmit} className={styles.form}>
                <Paragraph gutterBottom={16}>
                    <b>Gemeld door:</b> {`<${melding.naam}> - (${melding.email})`}&nbsp;
                    <b>op</b> {`${getFormattedDate(melding.dateTime)}`}
                </Paragraph>

                <TextField id="object" name="object" label="Object" placeholder="Object:" className={styles.input}/>

                <TextField id="locatie" name="locatie" label="Locatie" placeholder="Locatie:" className={styles.input}/>

                <Label htmlFor="beschrijving" label="Beschrijving van de situatie:" className={styles.label}/>
                <TextArea id="beschrijving" name="beschrijving" placeholder="Beschrijving"/>

                <Select id="urgentie" label="Indicatie van urgentie" defaultValue="4" className={styles.select}>

                    {urgentie.map(urgentie => (
                        <option key={urgentie.value} value={urgentie.value}>{urgentie.label}</option>
                    ))}
                </Select>

                <Label htmlFor="toelichting" label="Toelichting op de urgentie" className={styles.label}/>
                <TextArea id="toelichting" name="toelichting" placeholder="Toelichting:"/>

                <Label htmlFor="bestanden" label="Bestanden" className={styles.label}/>
                <FileUpload
                    id="bestanden"
                    placeholder="Sleep één bestand in dit vlak of"
                    fileUploadErrorLabel="Fout bij uploaden bestanden"
                    fileUploadInProgressLabel="Aan het uploaden..."
                    cancelLabel="Afbreken"
                    droppingLabel="Drop maar!"
                    removeLabel={"Wissen"}
                    selectFilesLabel={"selecteer één bestand"}
                    className={styles.fileUpload}
                    getPostUrl={(): Promise<string> => new Promise(resolve => resolve(postUrl))}
                    getHeaders={(): Promise<{ [key: string]: string; }> => new Promise(resolve => resolve(headers))}
                    />

                <Select id="type" label="Type informatie" defaultValue="1" className={`${styles.select} ${styles.slim}`}>
                    <option value="1" hidden>Maak een keuze</option>
                    {type.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                </Select>

                <Link href="/" variant="inline" className={styles.link}>
                    <Icon><Enlarge/></Icon> &nbsp; Nog een bijlage toevoegen
                </Link>

                <div className={styles.buttons}>
                    <Button type="reset" onClick={handleBackButton}>Terug</Button>
                    <Button variant="primary" type="submit">Opslaan</Button>
                </div>
            </form>
        </Accordion>
    );
}

export default Form;
