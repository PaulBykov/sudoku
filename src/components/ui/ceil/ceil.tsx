import React from 'react';
import styles from "./ceil.module.css"

interface ICeilProps{
    isValid: boolean,
    isDefault: boolean,
    currentValue: number;
    onClick: () => void;
}

function Ceil({isValid, isDefault, currentValue =  0, onClick} : ICeilProps) {

    return (
        <button onClick={() => onClick()}
                className={styles.btn}
                style={{color: !isValid ? 'red' : 'black'}}
                disabled={isDefault}
        >
            {currentValue === 0 ? '': currentValue}
        </button>
    );
}

export default Ceil;