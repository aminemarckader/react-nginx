import {
    ALL_DEPARTMENTS_FAIL,
    ALL_DEPARTMENTS_REQUEST,
    ALL_DEPARTMENTS_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/departmentsConstants";

const hardwareReducer = (state ={ departments: []}, action) => {
   switch(action.type)
   {
       case ALL_DEPARTMENTS_REQUEST:
           return {
               loading: true,
               departments: []
           }
       case ALL_DEPARTMENTS_SUCCESS:
           return {
               loading: false,
               departments: action.payload.departments,
               departmentsCount: action.payload.departmentsCount
           }
       case ALL_DEPARTMENTS_FAIL:
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