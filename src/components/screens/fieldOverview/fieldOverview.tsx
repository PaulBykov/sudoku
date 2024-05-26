import React, {useMemo} from 'react';
import Ceil from "../../ui/ceil/ceil";
import styles from "./fieldOverview.module.css"
import {FieldController} from "../../../features/FieldController";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {Validator} from "../../../features/Validator";
import {setCellsValidity} from "../../../redux/actions";
import {Dispatch} from "redux";

interface IField{
    fieldController: FieldController,
    selectedNumber: number
}

function FieldOverview({fieldController, selectedNumber}: IField) {
    const dispatch :Dispatch<any> = useDispatch();

    const cellsValidity: boolean[][] = useSelector((state: RootState) => state.cellsValidityReducer.cellsValidity);
    const defaultField: number[][] = useSelector((state: RootState) => state.defaultFieldReducer.defaultField);


    const currentField = fieldController.Field;
    const validator = useMemo(() => new Validator(
        fieldController,
        cellsValidity,
        (newValidation) => dispatch(setCellsValidity(newValidation))
    ), [fieldController, dispatch]);

    return (
        <div className={styles.field}>
            {currentField.map((row, i) => (
                row.map((cell, j) => (
                    <Ceil key={i * 10 + j}
                          isValid={cellsValidity[i][j]}
                          isDefault={defaultField[i][j] !== 0}
                          currentValue={currentField[i][j]}
                          onClick={() => {
                              fieldController.SetCeil(i, j, selectedNumber)
                              validator.Validate()
                          }}
                    />
                ))
            ))}
        </div>
    );
}

export default FieldOverview;