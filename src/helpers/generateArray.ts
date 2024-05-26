

export function generateArray(size: number){
    const arr:boolean[][] = new Array(size);

    for(let i = 0; i < size; i++){
        arr[i] = new Array(size).fill(true);
    }

    return arr;
}