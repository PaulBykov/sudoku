import {Action} from "redux";

export const SET_CELLS_VALIDITY = 'SET_CELLS_VALIDITY';
export const SET_SELECTED_NUMBER = 'SET_SELECTED_NUMBER';
export const SET_FIELD = 'SET_FIELD';
export const SET_DEFAULT_FIELD = 'SET_DEFAULT_FIELD';
export const SET_SOLVED_FIELD = 'SET_SOLVED_FIELD';



export interface SetCellsValidityAction extends Action<typeof SET_CELLS_VALIDITY> {
    payload: boolean[][];
}

export interface SetFieldAction extends Action<typeof SET_FIELD> {
    payload: number[][];
}

export interface SetDefaultFieldAction extends Action<typeof SET_DEFAULT_FIELD> {
    payload: number[][];
}

export interface SetSelectedNumberAction extends Action<typeof SET_SELECTED_NUMBER> {
    payload: number;
}

export interface SetSolvedFieldAction extends Action<typeof SET_SOLVED_FIELD> {
    payload: number[][];
}



