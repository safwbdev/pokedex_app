import { Dispatch } from "redux"
import { CHANGE_MODE } from "./actionTypes"

export const toggleMode = (data:boolean) => async (dispatch:Dispatch) =>{    
    dispatch({type:CHANGE_MODE, payload: !data})
}
