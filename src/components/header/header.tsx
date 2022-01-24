import React from "react";
import { Header as AmsterdamHeader } from "@amsterdam/asc-ui";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <AmsterdamHeader className={styles.header} tall title="Coding Challenge gemeente Amsterdam" fullWidth={false} homeLink="/"/>
    );
};

export default Header;
