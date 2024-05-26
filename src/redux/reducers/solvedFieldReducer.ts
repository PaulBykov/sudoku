import {Reducer} from 'redux';
import {SET_SOLVED_FIELD, SetSolvedFieldAction} from "../types";
import FieldGenerator from "../../api/FieldGenerator";


export interface solvedFieldState {
    solution: number[][];
}


const SolutionInitialState: solvedFieldState = {
    solution: FieldGenerator.GetInstance().SolvedField
}


const solvedFieldReducer: Reducer<solvedFieldState, SetSolvedFieldAction> =
    (state:solvedFieldState = SolutionInitialState, action) =>
    {
        switch (action.type) {
            case SET_SOLVED_FIELD:
                return {
                    ...state,
                    solution: action.payload
                };
            default:
                return state;
        }
    };


export default solvedFieldReducer;
