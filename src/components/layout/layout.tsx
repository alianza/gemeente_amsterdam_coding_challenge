import React from "react";
import styles from "./layout.module.scss";

function Layout(props: any) {
    return (
        <div id={'content'} className={styles.layout}>
            {props.children}
        </div>
    );
}

export default Layout;
