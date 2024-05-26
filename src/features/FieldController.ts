import {Dispatch} from "redux";
import {setCurrentField} from "../redux/actions";


export class FieldController {
    private readonly dispatch: Dispatch<any>;
    private readonly _fieldArr:number[][];


    public constructor(currentField: number[][], dispatch : Dispatch<any>) {
        this._fieldArr = currentField;
        this.dispatch = dispatch;
    }

    private SaveChanges(){
        this.dispatch(setCurrentField(structuredClone(this._fieldArr)));
    }

    public SetCeil(i:number, j:number, value: number):void{
        this._fieldArr[i][j] = value;
        this.SaveChanges();
    }

    public GetCeil(i:number, j:number):number{
        return this._fieldArr[i][j];
    }

    public GetRow(i:number){
        return this._fieldArr[i];
    }
    public GetColumn(j:number){
        const result = [];

        for(let k = 0; k < this._fieldArr.length; k++){
            result.push(this._fieldArr[k][j])
        }

        return result;
    }

    public get Length(){
        return this._fieldArr.length;
    }

    public get Field(){
        return this._fieldArr;
    }

    public GetEmptyCellCoords() :[number, number] | null{
        const matrix = this._fieldArr;
        const zeroCoordinates: [number, number][] = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 0) {
                    zeroCoordinates.push([i, j]);
                }
            }
        }

        if (zeroCoordinates.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * zeroCoordinates.length);
        return zeroCoordinates[randomIndex];
    }
}