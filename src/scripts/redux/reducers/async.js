


export const defaultState = {
    types: [],
    hotgame: [],
    newsgame: [],
    hotplaygame: [],
    salegame: [],
    anliwall: [],
    allgames: [],
    selectedImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561393372875&di=52085fb4e7688b11de12e7804f39fa29&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F21%2F02%2F16pic_2102530_b.jpg",
    selectedTitle: "",
    selectedCardtags: "",
    selectedCardtags1: "",
    selectedCardtags2: ""

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

            return { ...state, salegame: action.salegame }
            break;


        case "getAnliWall":
            return { ...state, anliwall: action.anliwall }
            break;


        case "getAllGames":
            return { ...state, allgames: action.allgames }
            break;



        case "changeAnliImg":
            return { ...state, selectedImg: action.selectedImg, selectedTitle: action.selectedTitle, selectedCardtags: action.selectedCardtags, selectedCardtags1: action.selectedCardtags1, selectedCardtags2: action.selectedCardtags2 }
            break;



        default:
            return state;
            break;
    }
}