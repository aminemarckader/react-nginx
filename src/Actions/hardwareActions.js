import axios from 'axios';
import {
    ALL_HARDWARE_FAIL,
    ALL_HARDWARE_REQUEST,
    ALL_HARDWARE_SUCCESS,
    CLEAR_ERRORS
} from '../Constants/hardwareConstants';

export const getHardware = () => async (dispatch) => {
    const url = 'http://192.168.0.50:9347';

    try {
            
            dispatch({
                type: ALL_HARDWARE_REQUEST
            });

            const {data} = await axios.get(url+'/api/v1/hardware');

            dispatch({
                type: ALL_HARDWARE_SUCCESS,
                payload: data
            });


    } catch (error) {
        dispatch({
            type: ALL_HARDWARE_FAIL,
            payload: error.response.data.message
        });
    }

}

export const clearErrors = async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
}