import React, {useMemo} from 'react';

import styles from "./main.module.css"

import FieldOverview from "../fieldOverview/fieldOverview";
import Statistic from "../stats/stats";
import {FieldController} from "../../../features/FieldController";
import {useDispatch, useSelector} from "react-redux";

import {Dispatch} from "redux";
import {RootState} from "../../../redux/store";
import {setSelectedNumber} from "../../../redux/actions";

function Main() {
    const dispatch :Dispatch<any> = useDispatch();

    const selectedNumber = useSelector((state: RootState) => state.selectedNumberReducer.selectedNumber)
    const currentField = useSelector((state: RootState) => state.currentFieldReducer.currentField);
    const solvedField = useSelector((state: RootState) => state.solutionReducer.solution)

    const fieldController = useMemo(() => new FieldController(
            currentField,
            dispatch)
        ,[solvedField, dispatch]
    )


    return (
        <div className={styles.gameContainer}>
            <FieldOverview
                fieldController={fieldController}
                selectedNumber={selectedNumber}
            />
            <Statistic
                fieldController={fieldController}
                selectNumber={(newValue: number) => dispatch(setSelectedNumber(newValue))}
            />
        </div>
    );
}

export default Main;