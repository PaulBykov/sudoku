import React from 'react';
import styles from "./selectButton.module.css"

interface ISelectButton{
    value: number,
    handler: () => void,
    selected?: boolean
}
function SelectButton({value, handler, selected} : ISelectButton) {
    return (
        <button onClick={handler} className={selected ? styles.activeCheckbox : styles.checkbox}>
            {value}
        </button>
    );
}

export default SelectButton;