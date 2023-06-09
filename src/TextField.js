import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./in.module.css"

function TextField({placeholder}) {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input
                className={styles.main}
                type="text"
                value={text}
                onChange={handleChange}
                placeholder={placeholder}
            />

        </div>
    );
}

export default TextField;