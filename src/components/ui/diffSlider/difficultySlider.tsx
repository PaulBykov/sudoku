import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Difficulty} from "sudoku-gen/dist/types/difficulty.type";

interface IDifficultySliderProps {
    selectDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
}


function DifficultySlider({selectDifficulty}: IDifficultySliderProps) {
    const [sliderValue, setSliderValue] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(event.target.value));
        selectDifficulty(diffs[sliderValue]);
    };

    const diffs : {[key:number]: Difficulty} = {
        1: 'easy',
        2: 'medium',
        3: 'hard',
        4: 'expert'
    }

    return (
        <div className={styles.difficultySlider}>
            <input type="range" min={1} max={4} defaultValue={sliderValue} onChange={handleChange} name="difficultySlider"/>
            <label htmlFor="difficultySlider" className={styles.selectedDiffName}>
                {diffs[sliderValue]}
            </label>
        </div>
    );
}

export default DifficultySlider;