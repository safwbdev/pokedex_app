import { CHANGE_MODE, CHANGE_MODEI } from "../actions/actionTypes";

interface DefaultStateI {
    classicMode: boolean
}

const defaultState: DefaultStateI = {
    classicMode:false
};


const modeReducer =(state: DefaultStateI = defaultState,action: CHANGE_MODEI) : DefaultStateI =>{

    switch (action.type) {
        case CHANGE_MODE:
            return{
                classicMode:action.payload
            }
        default:
            return state
    }
}

export default modeReducer