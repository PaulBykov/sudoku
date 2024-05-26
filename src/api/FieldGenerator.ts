import {getSudoku} from "sudoku-gen";
import {Difficulty} from "sudoku-gen/dist/types/difficulty.type";
import {Dispatch} from "redux";
import {setCellsValidity, setCurrentField, setDefaultField, setSolvedField} from "../redux/actions";
import {generateArray} from "../helpers/generateArray";
import HintController from "../features/HintController";


class FieldGenerator{
    private static instance: FieldGenerator;
    private _currentField : number[][];
    private _defaultField : number[][];
    private _solvedField  : number[][];

    private constructor(diff: Difficulty){
        const sudoku = getSudoku(diff);

        this._solvedField = this.StringFormatToMatrixFormat(sudoku.solution);
        this._defaultField = this.StringFormatToMatrixFormat(sudoku.puzzle);
        this._currentField = structuredClone(this._defaultField);
    }

    public get CurrentField (): number[][]{
        return this._currentField ;
    }
    public get DefaultField (): number[][]{
        return this._defaultField ;
    }
    public get SolvedField (): number[][]{
        return this._solvedField ;
    }

    public static GetInstance(diff: Difficulty = 'hard'){
        if(this.instance === undefined){
            this.instance = new FieldGenerator(diff);
        }

        return this.instance;
    }

    public RegenerateField(dispatch: Dispatch<any>, diff: Difficulty){
        const sudoku = getSudoku(diff);

        this._solvedField = this.StringFormatToMatrixFormat(sudoku.solution);
        this._defaultField = this.StringFormatToMatrixFormat(sudoku.puzzle);
        this._currentField = structuredClone(this._defaultField);

        dispatch(setCurrentField(this.CurrentField));
        dispatch(setDefaultField(this.DefaultField));
        dispatch(setSolvedField(this.SolvedField));
        dispatch(setCellsValidity(generateArray(9)));
    }

    private StringFormatToMatrixFormat(stringFormattedField: string): number[][] {
        const numFieldArr = stringFormattedField.split('').map((char:string) => char === '-' ? 0 : Number(char));

        const matrix: number[][] = [];
        for (let i = 0; i < 9; i++) {
            matrix.push(numFieldArr.slice(i * 9, i * 9 + 9));
        }

        return matrix;
    }
}


export default FieldGenerator;
