import {Reducer} from 'redux';
import {SET_FIELD, SetFieldAction} from "../types";
import FieldGenerator from "../../api/FieldGenerator";


export interface currentFieldState {
    currentField: number[][];
}


const CurrentFieldInitialState: currentFieldState = {
    currentField: FieldGenerator.GetInstance().CurrentField
}


const currentFieldReducer: Reducer<currentFieldState, SetFieldAction> =
    (state:currentFieldState = CurrentFieldInitialState, action) =>
    {
        switch (action.type) {
            case SET_FIELD:
                return {
                    ...state,
                    currentField: action.payload
                };
            default:
                return state;
        }
    };


export default currentFieldReducer;
