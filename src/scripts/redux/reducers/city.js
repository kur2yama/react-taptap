


export default (state = ["武汉"], action) => {
    switch (action.type) {
        case "changeCity":
            return [action.city]
            break;

        default:
            return state
            break;
    }
}