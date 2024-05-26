import {Reducer} from "redux";
import {SET_SELECTED_NUMBER, SetSelectedNumberAction} from "../types";


interface SelectedNumberState {
    selectedNumber: number;
}

const SelectedNumberInitialState: SelectedNumberState = {
    selectedNumber: 1,
};

const selectedNumberReducer: Reducer<SelectedNumberState, SetSelectedNumberAction> =
    (state:SelectedNumberState = SelectedNumberInitialState, action) =>
    {
        switch (action.type) {
            case SET_SELECTED_NUMBER:
                return {
                    ...state,
                    selectedNumber: action.payload
                };
            default:
                return state;
        }
    };

export default selectedNumberReducer;