import { FieldController } from "./FieldController";
import { generateArray } from "../helpers/generateArray";

export class Validator{
    private _field: FieldController;
    private _validity: boolean[][];
    private _validateController:  (a:boolean[][]) => void;

    public constructor(fieldController: FieldController, validationArr: boolean[][], controller: (a:boolean[][]) => void) {
        this._field = fieldController;
        this._validity = structuredClone(validationArr);
        this._validateController = controller;
    }

    public get HasErrors(){
        return (this._validity.flat()).includes(false);
    };

    public Validate(){
        this.ResetValidity();

        for (let i = 0; i < this._field.Length; i++) {
            if (!this.isValidRow(i)) {
                this.markRowInvalid(i);
            }
        }

        for (let i = 0; i < this._field.Length; i++) {
            if (!this.isValidColumn(i)) {
                this.markColumnInvalid(i);
            }
        }

        for(let i = 0; i < this._field.Length; i++){
            for(let j = 0; j < this._field.Length; j++){
                if(!this.isValidBlock(i, j)){
                    this.markBlockInvalid(i, j);
                }
            }
        }

        this._validateController(structuredClone(this._validity));
    }

    private ResetValidity(){
        this._validity = generateArray(9);
    }

    private isValidRow(row: number): boolean {
        return this.isUnique(this._field.GetRow(row));
    }
    private isValidColumn(col: number): boolean {
        return this.isUnique(this._field.GetColumn(col));
    }
    private isValidBlock(row:number, col:number){
        const blockValues: number[] = [];
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                blockValues.push(this._field.GetCeil(i, j));
            }
        }

        return this.isUnique(blockValues);
    }

    private isUnique(array: number[]): boolean  {
        const seen = new Set<number>();
        for (const num of array) {
            if (num === 0) continue

            if (seen.has(num)) {
                return false;
            }
            seen.add(num);
        }

        return true;
    }


    private markRowInvalid(row: number): void {
        this._validity[row].forEach((item, index) => {
            this._validity[row][index] = false;
        });
    }
    private markColumnInvalid(col: number): void {
        this._validity.map((row) => row[col] = false);
    }
    private markBlockInvalid(rowIndex: number, colIndex: number): void {
        const startRow = Math.floor(rowIndex / 3) * 3;
        const startCol = Math.floor(colIndex / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                this._validity[i][j] = false;
            }
        }
    }
}
