import {
    SET_CELLS_VALIDITY,
    SET_DEFAULT_FIELD,
    SET_FIELD,
    SET_SELECTED_NUMBER, SET_SOLVED_FIELD,
    SetCellsValidityAction,
    SetDefaultFieldAction,
    SetFieldAction,
    SetSelectedNumberAction,
    SetSolvedFieldAction
} from "./types";

export const setCellsValidity = (validity: boolean[][]): SetCellsValidityAction => ({
    type: SET_CELLS_VALIDITY,
    payload: validity,
});

export const setSelectedNumber = (newValue: number): SetSelectedNumberAction => ({
    type: SET_SELECTED_NUMBER,
    payload: newValue,
});

export const setCurrentField = (newField: number[][]): SetFieldAction => ({
    type: SET_FIELD,
    payload: newField,
});

export const setDefaultField = (newValue: number[][]): SetDefaultFieldAction => ({
    type: SET_DEFAULT_FIELD,
    payload: newValue,
});

export const setSolvedField = (newValue: number[][]): SetSolvedFieldAction => ({
    type: SET_SOLVED_FIELD,
    payload: newValue,
});




