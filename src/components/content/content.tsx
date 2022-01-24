import React from "react";
import styles from "./content.module.scss";

function Content(props: any) {
    return (
        <div id="content" className={styles.layout}>
            {props.children}
        </div>
    );
}

export default Content;
