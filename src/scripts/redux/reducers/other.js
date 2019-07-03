


export const defaultState = {
    msg: "这是用redux传出来的msg",
    count: 888888
}


export default (state = defaultState, action) => {
    switch (action.type) {

        case ("msg"):
            
            return { ...state, ...{ msg: action.msg } }
            break;


        case ("countAdd"):
            return {
                ...state, ...{ count: state.count + action.num }
            }
            break;
        case ("getTypes"):
            
            return {
                ...state, ...{ typeList: action.typeList }
            }
            break;

        default:
            
            return state;
            break;
    }
}