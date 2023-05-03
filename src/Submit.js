import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./in.module.css"

const Submit = ({ index, onClick, disabled }) => {

    return (
        <div className={styles.button}>
            <button
                type='button'
                onClick={onClick}
                disabled={disabled}
                className={styles[index]}
            >
                <a>Submit!</a>
            </button>
        </div>
    );
}

export default Submit;