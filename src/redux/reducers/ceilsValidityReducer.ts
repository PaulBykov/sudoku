import {Reducer} from 'redux';
import {generateArray} from "../../helpers/generateArray";
import {SET_CELLS_VALIDITY, SetCellsValidityAction} from "../types";


export interface CellsValidityState {
    cellsValidity: boolean[][];
}


const ValidityInitialState: CellsValidityState = {
    cellsValidity: generateArray(9),
};


const ceilsValidityReducer: Reducer<CellsValidityState, SetCellsValidityAction> =
    (state:CellsValidityState = ValidityInitialState, action) =>
    {
        switch (action.type) {
            case SET_CELLS_VALIDITY:
                return {
                    ...state,
                    cellsValidity: action.payload
                };
            default:
                return state;
        }
    };


export default ceilsValidityReducer;
