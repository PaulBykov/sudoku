import React, {useMemo, useState} from 'react';
import Selector from "../../ui/selector/selector";
import styles from "./stats.module.css"
import Button from "../../ui/button/button";
import {newGame} from "../../../api/newGame";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import HintController from "../../../features/HintController";
import {FieldController} from "../../../features/FieldController";
import DifficultySlider from "../../ui/diffSlider/difficultySlider";
import {Difficulty} from "sudoku-gen/dist/types/difficulty.type";

interface IStatsProps{
    fieldController: FieldController,
    selectNumber: (arg :number) => void,
}

function Statistic({fieldController, selectNumber} : IStatsProps) {
    const dispatch = useDispatch();

    const selectedNumber: number = useSelector((state: RootState) => state.selectedNumberReducer.selectedNumber);;
    const solution: number[][] = useSelector((state:RootState) => state.solutionReducer.solution)

    const [selectedDifficulty, selectDifficulty] = useState<Difficulty>('easy');


    const hinter = useMemo(() => new HintController(
        fieldController,
        solution
    ), [fieldController, solution])


    return (
        <div className={styles.stats}>
            <Selector min={1}
                      max={10}
                      selectNumber={(a) => selectNumber(a)}
                      selectedNumber={selectedNumber}
            />

            <div className={styles.content}>
                <div className={styles.gameStart}>
                    <DifficultySlider selectDifficulty={selectDifficulty}/>
                    <Button title="Новая игра" handler={() => newGame(selectedDifficulty, dispatch)}/>
                </div>

                <div className={styles.hinterContainer}>
                    <button className={styles.hinterButton} onClick={() => hinter.takeHint()}>
                        <img src="/hint.svg" alt="hint"/>
                        <div className={styles.hinterCount}>
                            {hinter.AvailableHintCount}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Statistic;