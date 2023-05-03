import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function TextField() {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />

        </div>
    );
}

export default TextField;