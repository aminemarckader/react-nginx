import axios from 'axios';
import {
    ALL_DEPARTMENTS_FAIL,
    ALL_DEPARTMENTS_REQUEST,
    ALL_DEPARTMENTS_SUCCESS,
    CLEAR_ERRORS
} from '../Constants/departmentsConstants';

export const getDepartments =() => async(dispatch) => {
    const url = 'http://192.168.0.50:9347';

    try {
        dispatch({
            type: ALL_DEPARTMENTS_REQUEST
        });

        const {data} = await axios.get(url+'/api/v1/departments');

        dispatch({
            type: ALL_DEPARTMENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_DEPARTMENTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async( dispatch ) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}