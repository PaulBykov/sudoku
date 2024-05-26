
var Hint = () => {};
var SelectNumber = (state:number) => {};

const handleKeyDown = (event:KeyboardEvent) :void => {
    switch (event.key) {
        case 'r':
            Hint();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            SelectNumber(parseInt(event.key));
            break;
    }
};

export function activateEvents(selectNumber : (state:number) => void, hint: () => void){
    Hint = hint;
    SelectNumber = selectNumber;

    window.removeEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleKeyDown);
}