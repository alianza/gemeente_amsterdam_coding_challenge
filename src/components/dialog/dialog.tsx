import { FormDataArray } from "../../lib/types/formDataArray";
import React, { FC } from "react";
import { Modal, Paragraph } from "@amsterdam/asc-ui";
import styles from "./dialog.module.scss";
import { capitalize } from "../../lib/capitalize";
import { Melding } from "../../lib/types/melding";
import { getFormattedDate } from "../../lib/getFormattedDate";

type DialogProps = {
    open: boolean,
    formData?: FormDataArray
    setOpen: (open: boolean) => void
    melding: Melding
}

const Dialog: FC<DialogProps> = ({ open, formData, setOpen, melding }) => {
    return (
        <Modal open={open} className={styles.modal}>
            <div onClick={() => setOpen(!open)} className={styles.closeButton}>✕</div>
            <h1>Ontvangen melding</h1>
            <Paragraph gutterBottom={16}>
                <b>Gemeld door:</b> {`<${melding.naam}> - (${melding.email})`}&nbsp;
            </Paragraph>
            <Paragraph gutterBottom={16}>
                <b>Datum/tijd:</b> {`${getFormattedDate(melding.dateTime)}`}
            </Paragraph>

                {formData?.map(({key, value}) => (
                    key === "bestanden"
                        ? <Paragraph key={key}><strong>{capitalize(key)}</strong> {(value as File).name} </Paragraph>
                        : <Paragraph key={key}>
                            <strong>{capitalize(key)}:</strong> {value.toString()}
                          </Paragraph>
                ))}
        </Modal>
    );
}

export default Dialog;
