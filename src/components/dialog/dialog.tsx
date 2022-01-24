import { FormDataArray } from "../../lib/types/formDataArray";
import { FC } from "react";
import { Modal, Paragraph } from "@amsterdam/asc-ui";
import styles from "./dialog.module.scss";
import { capitalize } from "../../lib/capitalize";

type DialogProps = {
    open: boolean,
    formData?: FormDataArray
    setOpen: (open: boolean) => void
}

const Dialog: FC<DialogProps> = ({ open, formData, setOpen }) => {
    return (
        <Modal open={open} style={{padding: "1em"}}>
            <div onClick={() => setOpen(!open)} className={styles.closeButton}>✕</div>
            <h1>Ontvangen melding</h1>
                {formData?.map(({key, value}) => (
                    key === "bestanden"
                        ? <Paragraph><strong>{capitalize(key)}</strong> {(value as File).name} </Paragraph>
                        : <Paragraph key={key}>
                            <strong>{capitalize(key)}:</strong> {value.toString()}
                          </Paragraph>
                ))}
        </Modal>
    );
}

export default Dialog;
