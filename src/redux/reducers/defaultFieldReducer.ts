import {Reducer} from 'redux';
import {SET_DEFAULT_FIELD, SetDefaultFieldAction} from "../types";
import FieldGenerator from "../../api/FieldGenerator";


export interface defaultFieldState {
    defaultField: number[][];
}


const DefaultFieldInitialState: defaultFieldState = {
    defaultField: FieldGenerator.GetInstance().DefaultField
};


const defaultFieldReducer: Reducer<defaultFieldState, SetDefaultFieldAction> =
    (state:defaultFieldState = DefaultFieldInitialState, action) =>
    {
        switch (action.type) {
            case SET_DEFAULT_FIELD:
                return {
                    ...state,
                    defaultField: action.payload
                };
            default:
                return state;
        }
    };


export default defaultFieldReducer;
