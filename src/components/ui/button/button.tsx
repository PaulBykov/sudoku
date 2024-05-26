import React from 'react';
import styles from "./button.module.css"

export interface IButtonProps{
    title?: string,
    handler: () => void | string;
}
function Button({title, handler} : IButtonProps) {
    return (
        <button className={styles.btn} onClick={handler}>
            {title}
        </button>
    );
}

export default Button;