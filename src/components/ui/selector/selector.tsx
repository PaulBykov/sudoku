import React from 'react';
import SelectButton from "../selectButton/selectButton";
import styles from "./selector.module.css"

interface ISelectorProps{
    min: number,
    max: number,
    selectedNumber: number,
    selectNumber: (a:number) => void;
}
function Selector({min, max, selectedNumber, selectNumber} : ISelectorProps) {
    const ButtonList : JSX.Element[] = [];

    for(let i = min; i < max; i++){
        ButtonList.push(
            <SelectButton key={i}
                          value={i}
                          handler={() => selectNumber(i)}
                          selected={selectedNumber===i}
            />
        )
    }

    return (
        <div className={styles.selector}>
            {ButtonList}
        </div>
    );
}

export default Selector;