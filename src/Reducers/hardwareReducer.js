import {
     ALL_HARDWARE_REQUEST,
     ALL_HARDWARE_SUCCESS,
     ALL_HARDWARE_FAIL,
     CLEAR_ERRORS
 } from "../Constants/hardwareConstants";

const hardwareReducer = (state ={ hardware: []}, action) => {
    switch(action.type){
        case ALL_HARDWARE_REQUEST:
            return {
                loading: true,
                hardware: []
            }
        case ALL_HARDWARE_SUCCESS:
            return {
                loading: false,
                hardware: action.payload.hardware,
                hardwareCount: action.payload.hardwareCount
            }
        case ALL_HARDWARE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default hardwareReducer;