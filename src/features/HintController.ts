import {FieldController} from "./FieldController";


class HintController {
    private static _usedHintCount = 0;
    private static readonly _maxHints = 10;
    private readonly _fieldController: FieldController;
    private readonly _solution: number[][];

    public constructor(field: FieldController, solution: number[][])   {
        this._fieldController = field;
        this._solution = solution;

        HintController._usedHintCount = 0;
    }

    public get AvailableHintCount() {
        return HintController._maxHints - HintController._usedHintCount;
    }

    public takeHint(){
        if(this.AvailableHintCount <= 0){
            return;
        }

        const targetCellCoors = this._fieldController.GetEmptyCellCoords();
        if(targetCellCoors === null){
            return;
        }

        const [i, j] = targetCellCoors;
        this._fieldController.SetCeil(...targetCellCoors, this._solution[i][j])
        HintController._usedHintCount++;
    }
}


export default HintController