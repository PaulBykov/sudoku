import FieldGenerator from "./FieldGenerator";
import {Dispatch} from "redux";
import {Difficulty} from "sudoku-gen/dist/types/difficulty.type";

export function newGame(diff: Difficulty, dispatch: Dispatch<any>){
   FieldGenerator.GetInstance().RegenerateField(dispatch, diff);
}