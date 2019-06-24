


export const defaultState = {
    types: [],
    hotgame: [],
    newsgame: [],
    hotplaygame: [],
    salegame: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case "getTypes":
            return { ...state, ...{ types: action.types } }
            break;
        case "getHotGame":
            
            return { ...state, hotgame: action.hotgame }
            break;

        case "getNewsGame":
            
            return { ...state, newsgame: action.newsgame }
            break;


        case "getHotPlayGame":
            
            return { ...state, hotplaygame: action.hotplaygame }
            break;



        case "getSaleGame":
            console.log("111")
            return { ...state, salegame: action.salegame }
            break;

        default:
            console.log("default")
            return state;
            break;
    }
}